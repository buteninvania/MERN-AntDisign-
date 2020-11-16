import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PersonalArea} from './Components/PersonalArea'
import {AuthPage} from './Components/AuthPage'
import {RegisterForm} from './Components/Forms'
import {Preloader} from "./Components/Preloader"
import { Employees } from './Components/Employees'

export const useRoutesAuth = (isAuth: boolean, isInitialize: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/personal" component={PersonalArea} exact/>
                <Redirect to="/personal"/>
            </Switch>
        )
    } else if (isInitialize) {
        return (
            <Preloader />
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Route path="/register" exact>
                <RegisterForm/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}

export const useRoutesPersonalArea = (isAuth: boolean, isInitialize: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/personal/employees" component={Employees} exact/>
            </Switch>
        )
    } else if (isInitialize) {
        return (
            <Preloader />
        )
    }
}