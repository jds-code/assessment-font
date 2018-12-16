import m from 'mithril'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        return m('nav.app-nav', {}, 'Nav')
    }

    return c
}
