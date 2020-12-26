import {AppStateType} from './redux-store'

export const getEmail = (state: AppStateType) => {
    return state.auth.email
}

export const getUser = (state: AppStateType) => {
    const user = {
        name: state.auth.name,
        surname: state.auth.surname,
        position: state.auth.position,
        email: state.auth.email
    }
    return user
}

export const isFetching = (state: AppStateType) => {
    return state.auth.isFetching
}
export const isAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getFeedBackMessage = (state: AppStateType) => {
    return state.auth.message
}

export const getFeedBackMode = (state: AppStateType) => {
    return state.auth.feedBackMode
}



