import m from 'mithril'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        return m('main.app-content', {}, vnode.children)
    }

    return c
}
