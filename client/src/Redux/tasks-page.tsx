import {BaseThunkType, InferActionsTypes} from './redux-store'

const initialState = {

}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/auth/SET-USER-DATA":
            return {
                ...state,
                ...action.values,
            }
        default:
            return state
    }
}

export const tasksActions = {
    setAuthUserData: (email: string | null, isAuth: boolean, userId: number | null) => ({
        type: "ButInProject/auth/SET-USER-DATA",
        values: {email, isAuth, userId}
    } as const)
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof tasksActions>
type ThunkType = BaseThunkType<ActionsType>