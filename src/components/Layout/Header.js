import m from 'mithril'
import Searcher from '../Searcher/Searcher'

export default (vnode) => {

    let c = {}

    c.view = (vnode) => {
        return m('header', {}, [
            m('h1', 'Assessment Front'),
            m(Searcher)
        ])
    }

    return c
}
