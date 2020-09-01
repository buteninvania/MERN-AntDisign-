import React from 'react'
import {Breadcrumb, Layout, Menu} from 'antd'

const {Content, Sider} = Layout

export const DialogPage = () => {
    return (
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu mode="inline" defaultSelectedKeys={['1']} style={{height: '100%', borderRight: 0}}>
                        <Menu.Item key="1">Working dialogues</Menu.Item>
                        <Menu.Item key="2">Flud</Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 0 24px'}}>
                <Breadcrumb style={{margin: '15px 0'}}>
                    <Breadcrumb.Item>Login</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 750}}>
                    <h1>DialogsPage</h1>
                </Content>
            </Layout>
        </Layout>
    )
}

