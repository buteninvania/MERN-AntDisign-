import React from 'react'
import 'antd/dist/antd.css'
import './../index.css'
import {Alert, Button, Input} from 'antd'
import {useFormik} from 'formik'
import * as Yup from 'yup'
// import {register} from '../Redux/auth-page'
import {useDispatch} from 'react-redux'
import { login } from '../Redux/auth-page'


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
                <Button size="large" type="default">Sign Up</Button>
            </div>
        </form>
    )
}

interface FormsValues {
    email: string | null,
    password: string | null
}