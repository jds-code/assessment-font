import m from 'mithril'
import Header from './Header'
import Body from './Body'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        return m('.app', {}, [
            m(Header),
            m(Body, {}, vnode.children)
        ])
    }

    return c
}
