import {AppStateType} from './redux-store'

export const getEmail = (state: AppStateType) => {
    return state.auth.email
}
export const isFetching = (state: AppStateType) => {
    return state.auth.isFetching
}
export const isAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth
}

