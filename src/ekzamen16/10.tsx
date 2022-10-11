import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// TYPES
type UserType = {
    avatar: string
    email: string
    first_name: string
    id: 1
    last_name: string
}

type ColorType = {
    color: string
    id: number
    name: string
    pantone_value: string
    year: number
}

type UsersResponseType = {
    total: number
    total_pages: number
    page: number
    per_page: number
    support: {
        url: string
        text: string
    }
    url: string
    data: UserType[]
}

type ColorsResponseType = {
    total: number
    total_pages: number
    page: number
    per_page: number
    support: {
        url: string
        text: string
    }
    url: string
    data: ColorType[]
}

type CommonResponseType = {
    // your code
}

// Api
const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

const reqresAPI = {
    getUsers() {
        return instance.get<UsersResponseType>('users')
    },
    getColors() {
        return instance.get<ColorsResponseType>('colors')
    }
}


// App
const App = () => {
    return (
        <>
            <h1>Reqres API</h1>
            <Users/>
            <Colors/>
        </>
    )
}

const Users = () => {

    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        reqresAPI.getUsers()
            .then((res) => setUsers(res.data.data))
    }, [])

    return (
        <div>
            <h2>Users</h2>
            <div style={{display: 'flex'}}>
                {
                    users.map(u => {
                        return (
                            <div key={u.id} style={{marginRight: '25px'}}>
                                <p>{u.first_name}</p>
                                <img src={u.avatar} alt=""/>
                            </div>
                        )
                    })
                }</div>
        </div>
    )
}

const Colors = () => {

    const [colors, setColors] = useState<ColorType[]>([])

    useEffect(() => {
        reqresAPI.getColors()
            .then((res) => setColors(res.data.data))
    }, [])

    return (
        <div>
            <h2>Colors</h2>
            <div style={{display: 'flex'}}>
                {
                    colors.map(c => {
                        return (
                            <div key={c.id} style={{marginRight: '25px'}}>
                                <p>{c.name}</p>
                                <div style={{backgroundColor: c.color, width: '128px', height: '30px'}}>
                                    <b>{c.color}</b>
                                </div>
                            </div>
                        )
                    })
                }</div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// Описание:
// При запуске проекта на экране вы увидите 2 списка: Users и Colors.
// С ними все хорошо, но обратите внимание на типизацию ответов с сервера UsersResponseType и ColorsResponseType.
// Дублирование типов на лицо.
// Ваша задача написать дженериковый тип CommonResponseType и заменить им дублирующие типы.
// Очередность свойств в типах менять запрещено (по причине что нам будет тяжело перебрать все правильные варианты :) )
// Параметр тип назовите буквой T

// В качестве ответа нужно скопировать полностью рабочий дженериковый тип CommonResponseType

// type CommonResponseType = {
//     total: number
//     total_pages: number
//     page: number
//     per_page: number
//     support: {
//         url: string
//         text: string
//     }
//     url: string
//     data: CommonType<T>
// }


// попробовать

// type CommonResponseType<T = {}> = {     так неправильно, пробовать дальше
type CommonResponseType<T> = {
    total: number
    total_pages: number
    page: number
    per_page: number
    support: {
        url: string
        text: string
    }
    url: string
    data: T
}
