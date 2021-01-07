import {AppStateType} from './redux-store'

export const getProjectsSelector = (state: AppStateType) => {
    return state.projects.projects
}

export const getDataProjectSelector = (state: AppStateType) => {
    return state.projects.dataProject
}




