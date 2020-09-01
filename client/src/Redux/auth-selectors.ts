import {AppStateType} from './redux-store'

export const getEmail = (state: AppStateType) => {
    return state.auth.email
}
