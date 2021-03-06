import { authReducer } from './auth-page'
import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import { appReducer } from './app'
import {employeesReducer} from './employees-page'
import {projectsReducer} from './projects-page'

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    employees: employeesReducer,
    projects: projectsReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store