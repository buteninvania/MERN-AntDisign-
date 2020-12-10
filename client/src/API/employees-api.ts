import {instance} from './api'

export const employeesAPI = {
    getAllEmployees() {
        return instance.get<string[]>(`api/employees/sync`)
            .then(res => res.data)
    }
}