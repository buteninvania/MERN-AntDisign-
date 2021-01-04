import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PersonalArea} from './Components/PersonalArea'
import {AuthPage} from './Components/AuthPage'
import {Preloader} from "./Components/Preloader"
import {Employees} from './Components/Employees/Employees'
import {HomePage} from './Components/Home/HomePage]'
import {Dialogues} from './Components/Dialogues'
import {RegisterPage} from './Components/RegisterPage'
import {useSelector} from 'react-redux'
import {isAuthSelector, isFetching} from './Redux/auth-selectors'



export const useRoutesAuth = () => {
    const isInitialize = useSelector(isFetching)
    const isAuth = useSelector(isAuthSelector)
    if (isInitialize) {
        return (
            <Preloader/>
        )
    }

    if (isAuth) {
        return (
            <Switch>
                <Route path="/" component={PersonalArea}/>
            </Switch>
        )
    } else if (!isAuth) {
        return (
            <Switch>
                <Route path="/" exact>
                    <AuthPage />
                </Route>
                <Route path="/register" exact>
                    <RegisterPage />
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }
}

export const useRoutesPersonalArea = (isAuth: boolean, isInitialize: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/employees" component={Employees} exact/>
                <Route path="/dialogues" component={Dialogues} exact/>
                <Route path="/home" component={HomePage}/>
                <Redirect to='/home'/>
            </Switch>
        )
    } else if (isInitialize) {
        return (
            <Preloader />
        )
    }
}
