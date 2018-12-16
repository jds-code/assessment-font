import m from 'mithril'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        return m('aside.app-aside.app-ads', {}, 'Aside')
    }

    return c
}
