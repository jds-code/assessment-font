import m from 'mithril'
import api from '../../api/api'
import store from '../../store/store'
import Gnome from '../Gnome/Gnome'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        return m('.container', {},
            m('ul.card', {},
                store.data.ready() ? store.Brastlewark().map((item) => {
                    return m('li.card-item', m(Gnome, item))
                }) : '')
        )
    }

    return c
}
