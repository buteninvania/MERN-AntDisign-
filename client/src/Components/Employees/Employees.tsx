import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllEmployees} from '../../Redux/employees-page'
import {getAllEmployeesSelector} from '../../Redux/employees-selectors'
import {getEmail} from '../../Redux/auth-selectors'
import e from '../Employees/employees.module.css'
import {Avatar} from 'antd'
import {Tasks} from '../Tasks/Tasks'

export const Employees = () => {

    const employees = useSelector(getAllEmployeesSelector)
    const myEmail = useSelector(getEmail)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEmployees());
    }, [])

    const [taskDisplay, setTaskDisplay] = useState(null)
    return (
        <div className={e.employees__content}>
            <div className={e.employees__items}>
                {employees.map((item, index) => <EmployeesItem setTaskDisplay={setTaskDisplay} key={index} myEmail={myEmail} email={item.email} taskDisplay={taskDisplay}/>)}
            </div>

            {taskDisplay ? <div className={e.employees__tasks}><Tasks employees={taskDisplay}/></div>
                         : <div className={e.employees__tasks}>Кликните по сотруднику чтобы увидеть процесс выполнения задач</div>
            }
        </div>
    )
}

const EmployeesItem = ({email, myEmail, setTaskDisplay, taskDisplay}) => {

    const setLoginTask = (e) => {
        e.preventDefault();
        setTaskDisplay(email)
    }

    return (
        <div onClick={setLoginTask}
             className={e.item + ((taskDisplay == email) ? " " + e.active : "") + ((myEmail == email) ? " " + e.myItem : "")}>
            <Avatar size={64}>{Array.from(email).slice(0, 2)}</Avatar>
            <span>{email}</span>
        </div>
    )
}