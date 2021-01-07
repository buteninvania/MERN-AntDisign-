import {BaseThunkType, InferActionsTypes} from './redux-store'
import {projectsAPI} from '../API/projects-api'


const initialState = {
    projects: [],
    dataProject: null as DataProjectType | null
}

export const projectsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ButInProject/projects/SET-PROJECTS":
            return {
                ...state,
                ...action.values,
            }
        case "ButInProject/projects/ADD-PROJECT":
            return {
                ...state,
                projects: [...action.values]
            }
        case "ButInProject/projects/SET-DATA-PROJECT":
            return {
                ...state,
                ...action.values
            }
        default:
            return state
    }
}

export const projectsActions = {
    setProjects: (projects: any) => ({
        type: "ButInProject/projects/SET-PROJECTS",
        values: {projects}
    } as const),
    addProject: (project: any) => ({
        type: "ButInProject/projects/ADD-PROJECT",
        values: {project}
    } as const),
    setDataProject: (dataProject: any) => ({
        type: "ButInProject/projects/SET-DATA-PROJECT",
        values: {dataProject}
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
            dispatch(getProjectsThunk())
            dispatch(getDataProjectThunk(res.data.id))
        })
        .catch(err => console.log("Ошибка сервера")
        )
}

export const getDataProjectThunk = (id: string | null): ThunkType => async (dispatch) => {
    await projectsAPI.getDataProject(id)
        .then((res) => {
            dispatch(projectsActions.setDataProject(res))
        })
        .catch(err => console.log("Ошибка сервера")
        )
}

export const deleteProjectThunk = (position: string | null, id: string | null): ThunkType =>
    async (dispatch) => {
        await projectsAPI.deleteProject(position, id)
            .then((res) => {
                dispatch(getProjectsThunk())
                dispatch(projectsActions.setDataProject(null))
            })
            .catch(err => console.log("Ошибка сервера")
            )
    }


type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof projectsActions>
type ThunkType = BaseThunkType<ActionsType>
type DataProjectType = {
    name: string,
    type: string,
    id: string
}