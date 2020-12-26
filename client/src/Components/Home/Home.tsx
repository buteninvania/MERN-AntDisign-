import React from 'react'
import {useSelector} from 'react-redux'
import {getUser} from '../../Redux/auth-selectors'
import h from '../Home/home.module.css'

export const Home = () => {

    const user = useSelector(getUser)

    return (
        <div className={h.home}>
            <div className={h.home__header}>
                <div className={h.avatar}></div>
                <div className={h.description}>
                    <div className={h.name}>{user.surname + " " + user.name + ` (${user.email})`}</div>
                    <div className={h.position}>{user.position}</div>
                </div>
            </div>
            <div className={h.home__content}>
                <div className={h.home__projects}>
                    <ul>
                        <li>Магазин ожеды</li>
                        <li>Магазин запчастей</li>
                    </ul>
                </div>
                <div className={h.home__implementation}>
                    <ul>
                        <li>Задачи</li>
                        <li>Заметки</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
