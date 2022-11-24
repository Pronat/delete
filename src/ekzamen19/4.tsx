import { useFormik } from 'formik';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Main
export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form>
            <div>
                <input
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="text"
                    placeholder={'Введите email'}
                />
            </div>
            <div>
                <input
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                    placeholder={'Введите пароль'}
                />
            </div>
            <button type="submit">Отправить</button>
        </form>
    );
}

// App
export const App = () => {
    return (
        <Routes>
            <Route path={''} element={<Login/>}/>
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// Описание:
// При заполнении данных формы и их отправке вы должны увидеть alert c
// введенными значениями, но из-за допущенной ошибки форма работает не корректно.
// Найдите ошибку и исправленную версию строки напишите в качестве ответа.
// Пример ответа: alert(JSON.stringify(values));