import {instance} from './api'

export const projectsAPI = {
    getProjects() {
        return instance.get(`api/projects/sync`)
            .then(res => res.data)
    },
    addProjects(name: string | null, type: string | null) {
        return instance.post(`api/projects/add`, {name, type})
            .then(res => res.data)
    },
    getDataProject(id: string | null) {
        return instance.post(`api/projects/data`, {id})
            .then(res => res.data.data)
    },
    deleteProject(position: string | null, id: string | null) {
        return instance.post(`api/projects/delete`, {position, id})
            .then(res => res.data.message)
    }
}