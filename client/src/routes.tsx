import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {DialogPage} from './Components/DialogPage'
import {AuthPage} from './Components/AuthPage'
import {RegisterForm} from './Components/Forms'
import {Preloader} from "./Components/Preloader";

export const useRoutes = (isAuth: boolean, isInitialize: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/dialogs" component={DialogPage} exact/>
                <Redirect to="/dialogs"/>
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
