import {AppStateType} from './redux-store'

export const getIsInitialize = (state: AppStateType) => {
    return state.app.isInitialize
}
