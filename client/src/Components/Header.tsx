import React from 'react'
import {styles} from '../Styles/stylesLoginPage'
import {Layout, Menu} from 'antd'
import {useDispatch} from 'react-redux'
import {authActions} from '../Redux/auth-page'
import {NavLink} from 'react-router-dom'

const {Header} = Layout

const HeaderContent: React.FC<HeaderContentPropsType> = ({isAuth, email}) => {
    const dispatch = useDispatch()
    const logoutBtn = () => {
        localStorage.removeItem('token')
        dispatch(authActions.logout())
    }
    return (
        <Header className="header" style={styles.headNav}>
            <div className="logo"></div>
            {!isAuth
                ? <HeaderMenuAuth/>
                : <HeaderMenuContent logoutBtn={logoutBtn} email={email}/>
            }
        </Header>
    )
}

export default HeaderContent

const HeaderMenuAuth = () => {
    return (
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><NavLink to="/">Sign In</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/register">Sign Up</NavLink></Menu.Item>
        </Menu>
    )
}
const HeaderMenuContent: React.FC<HeaderMenuContentPropsType> = ({logoutBtn, email}) => {
    return (
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1" onClick={logoutBtn}>Logout</Menu.Item>
                <Menu.Item key="2">{email}</Menu.Item>
            </Menu>
    )
}

type HeaderMenuContentPropsType = {
    logoutBtn(): void,
    email: null | string
}
type HeaderContentPropsType = {
    isAuth: boolean,
    email: string | null
}
