import axios from "axios"
let basePath = 'http://localhost:8080'

const userGetMe = (params) => {
    console.log(params)
    return axios.get(`${basePath}/me`, { params: params })
        .then((response) => {
            if (response != null) {
                return response.data
            }
        })
        .catch((error) => { console.log(error) })
}
const guestCreateUser = (params) => {
    return axios.post(`${basePath}/register`, {
        params: params
    })
}
const userLogin = (form) => {
    return axios.post(`${basePath}/login`, form)
        .then((response) => {
            if (response != null) {
                return response.data.token
            }
        })
        .catch((error) => { console.log(error) })

}

//Exports
export default { guestCreateUser, userLogin, userGetMe }

