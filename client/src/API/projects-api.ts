import {instance} from './api'

export const projectsAPI = {
    getProjects() {
        return instance.get(`api/projects/sync`)
            .then(res => res.data)
    },
    addProjects(name: string | null, type: string | null) {
        return instance.post(`api/projects/add`, {name, type})
            .then(res => res.data)
    }
}