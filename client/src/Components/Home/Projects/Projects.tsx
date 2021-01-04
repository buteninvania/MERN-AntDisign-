import React from 'react'
import {useParams} from 'react-router-dom'

export const Projects = (props) => {

    let {id} = useParams()

    return (
        <div>
            здесь будет название проекта а покачто id : {id}
            <ul>
                <li>Задачи</li>
                <li>Заметки</li>
            </ul>
        </div>
    )
}
