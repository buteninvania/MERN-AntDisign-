import {BaseThunkType, InferActionsTypes} from './redux-store'
import {projectsAPI} from '../API/projects-api'


const initialState = {
    projects: []
}

export const projectsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/projects/SET-PROJECTS-DATA":
            return {
                ...state,
                ...action.values,
            }
        default:
            return state
    }
}

export const projectsActions = {
    setProjects: (projects: any) => ({
        type: "ButInProject/projects/SET-PROJECTS-DATA",
        values: {projects}
    } as const),
}

export const getProjectsThunk = (): ThunkType => async (dispatch) => {
    await projectsAPI.getProjects()
        .then((res) => {
            const projects = res.data.projects
            dispatch(projectsActions.setProjects(projects))
        })
        .catch(err => console.log("Ошибка сервера")
        )
}

export const addProjectsThunk = (name: string | null, type: string | null): ThunkType => async (dispatch) => {
    await projectsAPI.addProjects(name, type)
        .then((res) => {
           console.log(res.data)
        })
        .catch(err => console.log("Ошибка сервера")
        )
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof projectsActions>
type ThunkType = BaseThunkType<ActionsType>