import React, {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.css'
import {Layout} from 'antd'
import HeaderContent from './Components/Header'
import {useRoutesAuth} from './routes'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './Redux/redux-store'
import {getEmail, isFetching, isAuthSelector} from './Redux/auth-selectors'
import {checkAuth} from './Redux/auth-page'

const {Footer} = Layout

export const ButInProject = () => {
    return (
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    )
}

const App = () => {
    const dispatch = useDispatch()
    useEffect( () => { dispatch( checkAuth() ) } )
    const email = useSelector(getEmail)
    const isInitialize = useSelector(isFetching)
    const isAuth = useSelector(isAuthSelector)
    const routes = useRoutesAuth(isAuth, isInitialize)

    return (
        <Layout>
            <HeaderContent isAuth={isAuth} email={email}/>
            {routes}
            <Footer style={{height: '100%', textAlign: 'center'}}>ButInProject ©2020 PersonalArea</Footer>
        </Layout>
    )
}

