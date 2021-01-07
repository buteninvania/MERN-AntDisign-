import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getProjectsThunk} from '../../../Redux/projects-page'
import {getProjectsSelector} from '../../../Redux/projects-selectors'
import n from './navbar.module.css'
import {Preloader} from '../../Preloader'
import {Menu, Modal} from 'antd'
import MenuItem from 'antd/es/menu/MenuItem'
import {PlusOutlined} from '@ant-design/icons'
import {AddProject} from '../../Forms'


export const NavBarProjects = () => {

    const projects = useSelector(getProjectsSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjectsThunk())
    }, [])

    console.log("Render NavBarProjects")

    return (
        <div className={n.home__navbar}>
            <div>Проекты</div>
            <NavBarProjectsMenu projects={projects}/>
        </div>
    )
}

const NavBarProjectsMenu = ({projects}) => {
    const [visibleModal, setVisibleModal] = useState(false)

    return (
        <Menu>
            {projects.map((i, index) => <MenuItem key={index}><NavLink to={`/home/${i.id}`}>{i.name}</NavLink></MenuItem> )}
            <MenuItem key={projects.length} icon={<PlusOutlined />} onClick={()=>setVisibleModal(true)}>Добавить проект</MenuItem>
            <ModalAddProject visible={visibleModal} setVisible={setVisibleModal}/>
        </Menu>
    )
}

const ModalAddProject = ({visible, setVisible}) => {

    return (
        <Modal title="Добавить проект" centered visible={visible} width={500} footer={null} onCancel={() => setVisible(false)}>
            <AddProject setVisible={setVisible}/>
        </Modal>
    )
}
