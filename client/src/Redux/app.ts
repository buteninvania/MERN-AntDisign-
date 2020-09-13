import {InferActionsTypes} from './redux-store'

const initialState = {
    isInitialize: false
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/auth/SET-INITIALIZE":
            return {
                ...state,
                ...action.isInitialize,
            }
        default:
            return state
    }
}

export const actionsApp = {
    setInitialize: (init: boolean) => ({
        type: "ButInProject/auth/SET-INITIALIZE",
        isInitialize: {init}
    } as const),
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actionsApp>