import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const antIcon = <LoadingOutlined style={{ fontSize: 150}} spin />

export const Preloader = () => {

    return (
       <div style={{display:"flex", justifyContent:"center", padding: 300}}>
           <Spin indicator={antIcon}/>
       </div>
    )
}
