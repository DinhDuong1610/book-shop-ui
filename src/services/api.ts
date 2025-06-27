import axios from 'services/axios.customize'

export const loginAPI = (username?: string, password?: string) => {
    const url_backend = '/api/v1/auth/login'
    return axios.post<IBackendRes<ILogin>>(url_backend, { username, password })
}

export const registerAPI = (fullName?: string, email?: string, password?: string, phone?: string) => {
    const url_backend = '/api/v1/auth/register'
    return axios.post<IBackendRes<IRegister>>(url_backend, { fullName, email, password, phone })
}

export const fetchAccountAPI = () => {
    const url_backend = '/api/v1/auth/account'
    return axios.get<IBackendRes<IUser>>(url_backend)
}