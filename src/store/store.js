import stream from 'mithril/stream'
import * as R from 'ramda'
import api from '../api/api'
import list from '../utils/list'

let store = {
    ready: stream(),
    filter: stream()
}

const init = () => {
    return new Promise((resolve, reject) => {
        store.ready(false)
        store.filter('')
        store.Brastlewark = stream()

        api.listGnomes()
            .then((data) => {
                store.Brastlewark(JSON.parse(data).Brastlewark)
                store.ready(true)
                resolve()
            })
            .catch((err) => {
                reject(err)
            })

    })
}

const Brastlewark = () => {
    if (store.ready()) {
        return (store.filter()) ? list.filterByName(store.Brastlewark(), store.filter()) : store.Brastlewark()
    } else {
        return []
    }
}

export default {
    init,
    data: store,
    Brastlewark
}
