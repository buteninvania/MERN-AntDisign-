import {AppStateType} from './redux-store'

export const getProjectsSelector = (state: AppStateType) => {
    return state.projects.projects
}




