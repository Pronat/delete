import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// Types
// type TodoType = {
//     id: number
//     tile: string
//     complete: boolean
//     userId: number
// }
type TodoType = {
    id: number
    tile: string
    complete: boolean
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
// пробовать   id title completed userId





















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
