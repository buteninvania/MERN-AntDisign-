import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {deleteProjectThunk, getDataProjectThunk} from '../../../Redux/projects-page'
import {getDataProjectSelector} from '../../../Redux/projects-selectors'
import {Preloader} from '../../Preloader'
import {getMyPosition} from '../../../Redux/auth-selectors'
import {Button} from 'antd'

export const Project = () => {

    const dataProject = useSelector(getDataProjectSelector)
    const myPosition = useSelector(getMyPosition)
    const {id} = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataProjectThunk(id))
    }, [id])

    const deleteProject = () => {
        dispatch(deleteProjectThunk(myPosition, id))
    }

    console.log("render Projects")
    return (
        <div>
            {dataProject == null ? <Preloader/>
                                 : <div>{dataProject.name}</div>
            }
            {myPosition == 'owner' ? <Button danger onClick={deleteProject}>Default</Button>
                                   : null
            }
        </div>

    )
}
