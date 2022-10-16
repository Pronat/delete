import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// Types
type TodoType = {
    id: number
    title: string
    completed: boolean
    userId: number
}


// Api
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const todosAPI = {
    getTodos() {
        return instance.get<TodoType[]>('todos?_limit=15')
    }
}


// App
export const App = () => {

    const [todos, setTodos] = useState<Array<TodoType>>([])

    useEffect(() => {
        todosAPI.getTodos().then((res) => setTodos(res.data))
    }, [])


    return (
        <>
            <h2>✅ Список тудулистов</h2>
            {
                todos.map((t) => {
                    return (
                        <div style={t.complete ? {color: 'grey'} : {}} key={t.id}>
                            <input type="checkbox" checked={t.complete}/>
                            <b>Описание</b>: {t.tile}
                        </div>
                    )
                })
            }
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// Описание:
// При написании типизации по невнимательности было допущено несколько ошибок.
// Напишите через пробел правильные свойства в TodoType, в которых была допущена ошибка.
// Debugger / network / документация вам в помощь

// Пример ответа: id status isDone

// неправильно  userId id title completed
// неправильно   id title completed userId
// попробовать   title completed









