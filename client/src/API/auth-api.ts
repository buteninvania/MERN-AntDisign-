import {instance} from './api'

export const authAPI = {
    checkAuth() {
        return instance.post(`api/auth/me`, {},{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }).then(res => res.data)
    },
    login(email: string | null, password: string | null) {
        return instance.post(`api/auth/login`, {email, password})
            .then(res => res.data)
    },
    register(email: string | null, password: string | null, name: string | null, surname: string | null, position: string | null) {
        return instance.post(`api/auth/register`, {email, password, name, surname, position})
            .then(res => res.data.data)
    }
}