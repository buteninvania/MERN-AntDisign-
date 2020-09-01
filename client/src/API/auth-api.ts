import {instance} from './api'

export const authAPI = {
    checkAuth() {
        return instance.post(`api/auth/me`, {Authorization: `Bearer ${localStorage.token}`}).then(res => console.log(res))
    },
    login(email: string | null, password: string | null) {
        return instance.post(`api/auth/login`, {email, password})
            .then(res => res.data)
    },
    register(email: string | null, password: string | null) {
        return instance.post(`api/auth/register`, {email, password})
            .then(res => res.data.data)
    }
}