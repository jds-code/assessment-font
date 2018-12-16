import m from 'mithril'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        return m('div', {}, 'Errors happens!')
    }

    return c
}
