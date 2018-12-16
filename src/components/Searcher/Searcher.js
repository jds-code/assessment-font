import m from "mithril"
import stream from 'mithril/stream'
import R from 'ramda'
import store from '../../store/store'

export default (vnode) => {

    let c = {}

    c.inputAttrs = () => {
        return {
            id: 'search-bar',
            type: 'text',
            value: store.data.filter(),
            oninput: m.withAttr("value", store.data.filter)
        }

    }

    c.view = (vnode) => {
        return m('input', c.inputAttrs())
    }

    return c
}
