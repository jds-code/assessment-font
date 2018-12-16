const m = require('mithril')

const request = (options) => {
    const args = Object.assign({}, options, {
        extract: (xhr) => {
            const isJSON = xhr.getResponseHeader('Content-Type') && xhr.getResponseHeader('Content-Type').indexOf('application/json') !== -1

            if (xhr.status >= 400) {
                throw new Object({
                    status: xhr.status,
                    statusText: xhr.statusText,
                    message: xhr.responseText
                })
            } else {
                return isJSON ? (xhr.responseText) ? JSON.parse(xhr.responseText) : xhr.responseText : xhr.responseText
            }
        }
    })

    return m.request(args).catch((err) => {
        let message = err.message || 'Request error'
        return Promise.reject(new Error(message))
    })
}

export default {
    get: (url, args) => {
        let options = {}
        options.method = 'GET'
        options.url = url
        options.withCredentials = false // cookies

        if (args && typeof args === 'object') {
            options = Object.assign(options, args)
        }
        return request(options)
    },

    post: (url, data, args) => {
        let options = {}
        options.method = 'POST'
        options.url = url
        options.withCredentials = false // cookies
        options.data = data

        if (args && typeof args === 'object') {
            Object.assign(options, args)
        }
        return request(options)
    }
}
