import {BaseThunkType, InferActionsTypes} from './redux-store'
import {authAPI} from '../API/auth-api'
import {actionsApp} from "./app";

const initialState = {
    isAuth: false,
    email: null as string | null,
    message: null as string | null,
    userId: null as number | null,
    isFetching: false,
    feedBackMode: null as string | null,
    name: null as string | null,
    surname: null as string | null,
    position: null as string | null,
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
        case "ButInProject/auth/SET-FEEDBACK-MODE":
            return {
                ...state,
                ...action.feedBackMode
            }
        case "ButInProject/auth/LOGOUT":
            return {
                ...state, email: null, userId: null, isAuth: false
            }
        case "ButInProject/auth/SETISFETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const authActions = {
    setAuthUserData: (email: string | null, isAuth: boolean, userId: number | null, name: string | null, surname: string | null, position: string | null ) => ({
        type: "ButInProject/auth/SET-USER-DATA",
        values: {email, isAuth, userId, name, surname, position}
    } as const),
    setFeedback: (message: string | null) => ({
        type: "ButInProject/auth/SET-FEEDBACK-MESSAGE",
        message: {message}
    } as const),
    setFeedBackMode: (feedBackMode: string | null) => ({
        type: "ButInProject/auth/SET-FEEDBACK-MODE",
        feedBackMode: {feedBackMode}
    } as const),
    logout: () => ({
        type: "ButInProject/auth/LOGOUT",
    } as const),
    setIsFetching: (isFetching: boolean) => ({
        type: "ButInProject/auth/SETISFETCHING",
        isFetching: isFetching
    } as const)
}

export const checkAuth = (): ThunkType => async (dispatch) => {
    dispatch(authActions.setIsFetching(true))
    await authAPI.checkAuth()
        .then((res: any) => {
            if (!res) {
                console.log('нет')
            } else {
                dispatch(authActions.setFeedBackMode("success"))
                dispatch(authActions.setFeedback("Вы в системе!"))
                dispatch(authActions.setAuthUserData(res.email, true, null, res.name, res.surname, res.position))
            }
        })
        .catch(err => console.log("Ошибка сервера")
        )
    dispatch(authActions.setIsFetching(false))
}

export const login = (email: string | null, password: string | null): ThunkType => async (dispatch) => {
    dispatch(authActions.setIsFetching(true))
    await authAPI.login(email, password)
        .then(res => {
            dispatch(authActions.setFeedBackMode("success"))
            dispatch(authActions.setFeedback("Вы успешно авторизовались"))
            const {token, userId, name, surname, position} = res
            localStorage.setItem('token', token)
            dispatch(authActions.setAuthUserData(email, true, userId, name, surname, position))
        })
        .catch(err => {
            dispatch(authActions.setFeedBackMode("warning"))
            dispatch(authActions.setFeedback("Ошибка сервера"))
        })
    dispatch(authActions.setIsFetching(false))
}
export const register = (email: string | null, password: string | null, name: string | null, surname: string | null, position: string | null): ThunkType => async (dispatch) => {
    dispatch(authActions.setIsFetching(true))
    await authAPI.register(email, password, name, surname, position)
        .then((res: any) => {
           dispatch(login(res.email, res.password))
        })
        .catch(error => console.log(error.response.data.message))
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof authActions>
type ThunkType = BaseThunkType<ActionsType>