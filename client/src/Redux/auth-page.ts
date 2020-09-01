import {BaseThunkType, InferActionsTypes} from './redux-store'
import {authAPI} from '../API/auth-api'

const initialState = {
    isAuth: false,
    email: null as string | null,
    message: null as string | null,
    userId: null as number | null,
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/auth/SET-USER-DATA":
            return {
                ...state,
                ...action.values,
            }
        case "ButInProject/auth/SET-FEEDBACK-MESSAGE":
            return {
                ...state,
                ...action.message
            }
        case "ButInProject/auth/LOGOUT":
            return {
                ...state,email: null, userId: null, isAuth: false
            }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (email: string | null, isAuth: boolean, userId: number | null) => ({
        type: "ButInProject/auth/SET-USER-DATA",
        values: {email, isAuth, userId}
    } as const),
    setFeedback: (message: string | null) => ({
        type: "ButInProject/auth/SET-FEEDBACK-MESSAGE",
        message: {message}
    } as const),
    logout: () => ({
        type: "ButInProject/auth/LOGOUT",
    } as const)
}

export const checkAuth = (): ThunkType => async (dispatch) => {
    await authAPI.checkAuth()
        .then(res => {
            debugger
        })
        .catch(err => console.log(err.response.data.message))
}

export const login = (email: string | null, password: string | null): ThunkType => async (dispatch) => {
    await authAPI.login(email, password)
        .then(res => {
            const {token, userId} = res
            localStorage.setItem('token', token)
            dispatch(actions.setAuthUserData(email, true, userId))
        })
        .catch(err => console.log(err.response.data.message))
}
export const register = (email: string | null, password: string | null): ThunkType => async (dispatch) => {
    await authAPI.register(email, password)
        .then(res => {
            dispatch(login(res.email, res.isAuth))
            dispatch(actions.setFeedback(res.message))
        })
        .catch(error => console.log(error.response.data.message))
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>