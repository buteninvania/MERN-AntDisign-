import React from 'react'
import {styles} from '../Styles/stylesLoginPage'
import {Layout, Menu} from 'antd'
import {useDispatch} from 'react-redux'
import {actions} from '../Redux/auth-page'

const {Header} = Layout

const HeaderContent: React.FC<HeaderContentPropsType> = ({isAuth, email}) => {
    const dispatch = useDispatch()
    const logoutBtn = () => {
        localStorage.removeItem('token')
        dispatch(actions.logout())
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
            <Menu.Item key="1">Sign In</Menu.Item>
            <Menu.Item key="2">Sign Up</Menu.Item>
        </Menu>
    )
}
const HeaderMenuContent: React.FC<HeaderMenuContentPropsType> = ({logoutBtn, email}) => {
    return (
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1" onClick={logoutBtn}>Logout</Menu.Item>
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
