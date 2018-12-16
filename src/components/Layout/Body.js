import m from 'mithril'
import api from '../../api/api'

import Aside from './Aside'
import Nav from './Nav'
import Main from './Main'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        return m('.app-body', {}, [
            m(Main, {}, vnode.children),
            m(Nav),
            m(Aside)
            ])
    }

    return c
}
