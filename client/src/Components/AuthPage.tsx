import React from 'react'
import {Breadcrumb, Card, Layout} from 'antd'
import { SignInForm } from './Forms'

const {Content} = Layout

export const AuthPage = () => {

    return (
        <Layout style={{padding: '0 24px 24px'}}>
            <Breadcrumb style={{margin: '15px 0'}}>
                <Breadcrumb.Item>Login</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 700}}>
                <div className="site-card-border-less-wrapper" style={{display: "flex", justifyContent: "center"}}>
                    <Card title="Login to your account" headStyle={{textAlign: "center"}} bordered={false} style={{width: 300}}>
                        <SignInForm />
                    </Card>
                </div>
            </Content>
        </Layout>
    )
}
