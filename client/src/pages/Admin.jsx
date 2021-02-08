import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useMessage} from "../hooks/messageHook"
import {useRequest} from "../hooks/hookRequests"
import {AuthContext} from "../context/AuthContext"
import {Preloader} from "../components/common/Preloader"
import {Users} from "../components/admin/Users"
import {ShowTodoUsers} from "../components/admin/ShowTodoUser"

export const Admin = () => {
    const {token} = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, req, clearError} = useRequest()
    const [show, setShow] = useState(false)
    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([])

    const getUsers = useCallback(async () => {
        try {
            const data = await req('/api/user/all', 'GET', null, {
                Authorization: `Bearer ${token}`
            })

            setUsers(data)

        } catch (e) {

        }
    }, [token, req])

    useEffect(() => {
        getUsers()
    }, [getUsers])
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const getTodoUser = async id => {
        try {
            const data = await req('/api/todo/userTodo', 'POST', {id}, {
                Authorization: `Bearer ${token}`
            })

            setTodos(data)

            setShow(true)

        } catch (e) {

        }
    }

    const changeStatusUser = async id => {
        try {
            const data = await req('/api/user/changeStatus', 'POST', {id}, {
                Authorization: `Bearer ${token}`
            })

            message(data.message)

            getUsers()

        } catch (e) {

        }
    }

    const deleteUser = async id => {
        try {
            const data = await req('/api/user/delete', 'DELETE', {id}, {
                Authorization: `Bearer ${token}`
            })

            message(data.message)

            getUsers()

        } catch (e) {

        }
    }

    if (loading) {
        return <Preloader/>
    }

    const user = users.map(u =>
        <Users
            key={u._id}
            id={u._id}
            email={u.email}
            status={u.status}
            getTodoUser={getTodoUser}
            changeStatusUser={changeStatusUser}
            deleteUser={deleteUser}
        />
    )

    return (
        <>
            <table className='mg-top-10 centered'>
                <thead>
                <tr>
                    <th>Пользователь</th>
                    <th>Статус</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {user}
                </tbody>
            </table>
            {show
                ? <ShowTodoUsers
                    todos={todos}
                    closeTodo={() => setShow(false)}
                />
                : ''
            }
        </>
    )
}
