import { useFormik } from 'formik';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Types
type LoginFieldsType = {
    firstName?: string
}

// Main
export const Login = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
        },
        validate: (values) => {
            const errors: LoginFieldsType = {};
            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder={'Введите имя'} {...formik.getFieldProps('firstName')}/>
            </div>
            <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Отправить</button>
            {/*<button type="submit" disabled={!(formik.values.firstName.length > 4)}>Отправить</button>*/}
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

// Начните вводить в поле firstName символы. После ввода первого символа кнопка "Отправить" раздизаблится.
// Задача: кнопка "Отправить" должна раздизаблиться только в том случае, если длинна имени больше, либо равна 5 символам.
// Т.е. вам необходимо самостоятельно написать эту валидацию для поля firstName.
// ❗ В качестве текста ошибки напишите 'Must be 5 characters or more'
// ❗ Текст ошибки выводить не нужно (только если для себя поиграться).
// В качестве ответа напишите полностью строку кода с условием.
// Пример ответа: return errors.firstName = 'Must be 5 characters or more'
// ❗ Сторонние библиотеки (например yup) использовать запрещено

// неправильно   <button type="submit" disabled={!(formik.values.firstName.length > 4)}>Отправить</button>