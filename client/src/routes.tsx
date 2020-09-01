import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {DialogPage} from './Components/DialogPage'
import {AuthPage} from './Components/AuthPage'

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/dialogs" exact>
                    <DialogPage/>
                </Route>
                <Redirect to="/dialogs"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )

}
