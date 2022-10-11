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
    getTodo(todoId: number) {
        return instance.get<TodoType>(`todos/ ${todoId}`)
    }
}


// App
export const App = () => {

    const [todo, setTodo] = useState<TodoType | null>(null)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const todoId = 4
        todosAPI.getTodo(todoId)
            .then((res: any) => setTodo(res.data))
            .catch(e => {
                setError('Ошибка 😰. Анализируй network 😉')
            })
    }, [])


    return (
        <>
            <h2>✅ Тудулист</h2>
            {
                !!todo
                    ? <div>
                        <div style={todo?.completed ? {color: 'grey'} : {}} key={todo?.id}>
                            <input type="checkbox" checked={todo?.completed}/>
                            <b>Описание</b>: {todo?.title}
                        </div>
                        <h2>Так держать. Ты справился 🚀</h2>
                    </div>
                    : <h2 style={{ color: 'red' }}>{error}</h2>
            }
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// Описание:
// Студент по неопытности допустил одну маленькую ошибку, но из-за нее он не может вывести на экран тудулист.
// Найдите ошибку и вставьте исправленную версию строки кода в качестве ответа
// Пример ответа:  'https://jsonplaceholder.typicode.com/todos'

// P.S. Эта ошибка из реальной жизни, студенты часто ошибаются и не могут понять в чем дело.


// неправильно (как 7 вопрос)    return instance.get<TodoType>(`todos`)