import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export const PageNotFound = () => {
    return <h2>⛔ 404. Page not found ⛔</h2>
}

export const Profile = () => {
    return <h2>😎 Профиль</h2>
}


export const Main = () => {
    return (
        <>
            <h2>✅ Список тудулистов</h2>
            <h2>📜 Список постов</h2>
        </>
    )
}

// App
export const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={"Стартовая страница"}/>
            <Route path={'profile'} element={<Profile/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// Описание:
// При загрузке приложения вы видите надпись "Стартовая страница".
// Перепишите Route таким образом, чтобы при загрузке приложения нас
// редиректило на страницу Profile.
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: <Route path={'/'} element={'to profile page'}/>