import React from 'react'
import {useSelector} from 'react-redux'
import {getUser} from '../../Redux/auth-selectors'
import h from '../Home/home.module.css'
import {Route} from 'react-router-dom'
import {Project} from './Projects/Projects'
import {NavBarProjects} from './NavBarProjects/NavBarProjects'

export const HomePage = ({match}) => {

    const user = useSelector(getUser)

    console.log("render HomePage")

    return (
        <div className={h.home}>
            <div className={h.home__header}>
                <div className={h.avatar}>{user.name}</div>
                <div className={h.description}>
                    <div className={h.name}>{user.surname + " " + user.name + ` (${user.email})`}</div>
                    <div className={h.position}>{user.position}</div>
                </div>
            </div>
            <div className={h.home__content}>
                <NavBarProjects/>
                <Route path={match.url + "/:id"} component={Project} />
            </div>
        </div>
    )
}
