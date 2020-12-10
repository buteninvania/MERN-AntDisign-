import {AppStateType} from './redux-store'

export const getAllEmployeesSelector = (state: AppStateType) => {
    return state.employees.allEmployees
}
