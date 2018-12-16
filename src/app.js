import m from 'mithril'
import stream from 'mithril/stream'
import store from './store/store'

// Main layaout components
import Layout from './components/Layout/Layout'
import Landing from './components/Landing/Landing'
import ErrorPage from './components/Error/Error'


let routesCfg = {}

/*
 *  Initializes basic application modules.
 */
const initApp = () => {
    return new Promise((resolve, reject) => {
        if (module.hot) module.hot.accept()
        resolve()
    })
}

/*
 *  Full app routes definition.
 */
const getRoutes = () => {
    return {
        '/': {view: () => m(Layout, m(Landing))},
        '/error': {view: () => m(ErrorPage)}
    }
}

const mountApp = (settings) => {
    return new Promise((resolve, reject) => {
        let routes = getRoutes()

        Object.keys(routes).forEach((key) => {
            routesCfg[key] = {
                onmatch: (args, path) => {
                    return new Promise((resolve, reject) => {
                        (routes[key]) ? resolve(routes[key]) : resolve(routes['/error'])
                    })
                }
            }
        })
        resolve()
    })
}

initApp()
    .then(store.init)
    .then(mountApp)
    .then(() => {
        m.route(document.body, "/", routesCfg)
    })
    .catch((err) => {
        console.log(err)
        m.route.set('/error')
    })
