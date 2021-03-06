import React from 'react'
import 'antd/dist/antd.css'
import './../index.css'
import {Alert, Button, Input, Select} from 'antd'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { login, register } from '../Redux/auth-page'
import {NavLink} from 'react-router-dom'
import {addProjectsThunk} from '../Redux/projects-page'

const { Option } = Select


export const SignInForm = () => {

    const dispatch = useDispatch()
    const submit = (values: FormsValues) => {
        const {email, password} = values
        dispatch(login(email, password))
    }

    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Required'),
        }),
        onSubmit: (values: FormsValues) => {
            submit(values)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <Input id="email"
                   type="email"
                   allowClear={true}
                   {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? <Alert message={formik.errors.email} type="error"/> : null}
            <label htmlFor="password">Password</label>
            <Input id="password"
                   {...formik.getFieldProps('password')}
                   type="current-password"
                   allowClear={true}
            />
            {formik.touched.password && formik.errors.password ? <Alert message={formik.errors.password} type="error"/> : null}
            <div style={{display: "flex", justifyContent: "space-around", margin: 10}}>
                <Button size="large" type="primary" htmlType="submit">Submit</Button>
                <Button size="large" type="default"><NavLink to="/register">Sign Up</NavLink></Button>
            </div>
        </form>
    )
}

export const RegisterForm = () => {

    const dispatch = useDispatch()
    const submit = (values: RegisterFormsValues) => {
        const {email, password, name, surname, position} = values
        dispatch(register(email, password, name, surname, position))
    }

    const formik = useFormik({
        initialValues: {email: '', password: '', name:'', surname: '', position: ''},
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Required'),
        }),
        onSubmit: (values: RegisterFormsValues) => {
            submit(values)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <Input id="name"
                   type="text"
                   allowClear={true}
                   {...formik.getFieldProps('name')}
            />
            <label htmlFor="Surname">Surname</label>
            <Input id="surname"
                   type="text"
                   allowClear={true}
                   {...formik.getFieldProps('surname')}
            />
            <label htmlFor="email">Email</label>
            <Input id="email"
                   type="email"
                   allowClear={true}
                   {...formik.getFieldProps('email')}
            />
            <label htmlFor="position">Position</label>
            <Select
                id="position"
                {...formik.getFieldProps('position')}
                onChange={(value => formik.setFieldValue("position", value))}
                showSearch
                style={{width: "100%", display: "flex"}}
                optionFilterProp="children"
            >
                <Option value="owner">Owner</Option>
                <Option value="frontend">Frontend</Option>
                <Option value="backend">Backend</Option>
            </Select>
            {formik.touched.email && formik.errors.email ? <Alert message={formik.errors.email} type="error"/> : null}
            <label htmlFor="password">Password</label>
            <Input id="password"
                   {...formik.getFieldProps('password')}
                   type="current-password"
                   allowClear={true}
            />
            {formik.touched.password && formik.errors.password ? <Alert message={formik.errors.password} type="error"/> : null}
            <div style={{display: "flex", justifyContent: "space-around", margin: 10}}>
                <Button size="large" type="primary" htmlType="submit">Submit</Button>
                <Button size="large" type="default"><NavLink to="/">Sign In</NavLink> </Button>
            </div>
        </form>
    )
}

//Форма создания проекта
export const AddProject = ({setVisible}) => {
    const dispatch = useDispatch()
    const submit = (values: AddProjectsValuesType) => {
        const {name, type} = values
        dispatch(addProjectsThunk(name, type))
        setVisible(false)
    }

    const formik = useFormik({
        initialValues: {name: '', type: ''},
        onSubmit: (values: AddProjectsValuesType) => {
            submit(values)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Название проекта</label>
            <Input id="name"
                   type="text"
                   allowClear={true}
                   {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? <Alert message={formik.errors.name} type="error"/> : null}
            <Select
                id="type"
                {...formik.getFieldProps('type')}
                onChange={(value => formik.setFieldValue("type", value))}
                showSearch
                style={{width: "100%", display: "flex"}}
                optionFilterProp="children"
            >
                <Option value="shop">Онлайн магазины</Option>
                <Option value="layout">Верстка</Option>
                <Option value="server">Backend</Option>
                <Option value="fullstack">Fullstack</Option>
            </Select>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button type="ghost" onClick={() => setVisible(false)}>Cancel</Button>
        </form>
    )
}

interface FormsValues {
    email: string | null,
    password: string | null
}

interface RegisterFormsValues {
    email: string | null,
    password: string | null,
    name: string | null,
    surname: string | null,
    position: string | null
}

interface AddProjectsValuesType {
    name: string | null,
    type: string | null
}