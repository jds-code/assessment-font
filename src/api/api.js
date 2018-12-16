import request from '../utils/request'

const manageErrors = (err) => Promise.reject(err)

export default {

    listGnomes: () => request.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(data => data)
        .catch(manageErrors),

}
