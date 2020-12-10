import React from 'react'
import {Breadcrumb, Layout, Menu} from 'antd'
import { NavLink } from 'react-router-dom'
import {useRoutesPersonalArea} from '../routes'
import {useSelector} from 'react-redux'
import {isAuthSelector} from '../Redux/auth-selectors'
import {getIsInitialize} from '../Redux/app-selectors'

const {Content, Sider} = Layout

export const PersonalArea = () => {

    const isAuth = useSelector(isAuthSelector)
    const init = useSelector(getIsInitialize)
    const routes = useRoutesPersonalArea(isAuth, init)

    return (
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu mode="inline" defaultSelectedKeys={["1"]} style={{height: '100%', borderRight: 0}}>
                    <Menu.Item key="1"><NavLink to="/personal">Home</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to="/personal/employees">Employees</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to="/personal/dialogues">Dialogues</NavLink></Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 0 24px'}}>
                <Breadcrumb style={{margin: '15px 0'}}>
                    <Breadcrumb.Item>Login</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 750}}>
                    {routes}
                </Content>
            </Layout>
        </Layout>
    )
}

