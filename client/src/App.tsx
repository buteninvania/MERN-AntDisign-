import React, {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.css'
import {Layout} from 'antd'
import HeaderContent from './Components/Header'
import {useRoutesAuth} from './routes'
import {Provider, useDispatch} from 'react-redux'
import {checkAuth} from './Redux/auth-page'
import store from './Redux/redux-store'

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

    const routes = useRoutesAuth()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkAuth())
    }, [])
    console.log("render")
        return (
            <Layout>
                <HeaderContent />
                {routes}
                <Footer style={{height: '80px', textAlign: 'center'}}>ButInProject ©2020 PersonalArea</Footer>
            </Layout>
        )
}

