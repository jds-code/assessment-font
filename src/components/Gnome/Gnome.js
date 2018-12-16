import m from 'mithril'
import api from '../../api/api'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        let gnome = vnode.attrs
        return m('.gnome-card', {}, [
            m('img.gnome-image', { src: gnome.thumbnail }),
            m('.gnome-info', {}, [
                m('.gnome-title', {}, gnome.name),
                m('.gnome-body', {}, [
                    m('.gnome-data', {}, [
                        m('label', {}, 'ID:'),
                        m('span', {}, gnome.id)
                    ]),
                    m('.gnome-data', {}, [
                        m('label', {}, 'Age:'),
                        m('span', {}, gnome.age)
                    ]),
                    m('.gnome-data', {}, [
                        m('label', {}, 'Weight:'),
                        m('span', {}, gnome.weight)
                    ]),
                    m('.gnome-data', {}, [
                        m('label', {}, 'Height:'),
                        m('span', {}, gnome.height)
                    ]),
                    m('.gnome-data', {}, [
                        m('label', {}, 'Hair:'),
                        m('span', {}, gnome.hair_color)
                    ]),
                    m('.gnome-data', {}, [
                        m('label', {}, 'Professions:'),
                        m('span', {}, gnome.professions.join(', '))
                    ]),
                    m('.gnome-data', {}, [
                        m('label', {}, 'Friends:'),
                        m('span', {}, gnome.friends.join(', '))
                    ])
                ])
            ])
        ])
    }

    return c
}
