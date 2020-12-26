import {BaseThunkType, InferActionsTypes} from './redux-store'
import {employeesAPI} from '../API/employees-api'

const initialState = {
    allEmployees: [],
}

export const employeesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/employees/SET-EMPLOYEES":
            return {
                ...state,
                allEmployees: action.employees
            }
        default:
            return state
    }
}

export const actions = {
    setEmployees: (employees: []) => ({
        type: "ButInProject/employees/SET-EMPLOYEES",
        employees: employees
    } as const),
}

export const getAllEmployees = (): ThunkType => async (dispatch) => {
    await employeesAPI.getAllEmployees()
        .then(res => {
            dispatch(actions.setEmployees(res))
        })
        .catch(err => console.log("Ошибка")
        )
}


type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>