import {combineReducers, createStore} from 'redux'
import ReactDOM from 'react-dom'
import {Provider, useSelector} from 'react-redux'
import React from 'react'

let initialState = {items:
        [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Ignat'}
        ]
}
const usersReducer = (state = initialState, action: any) => {
    return state
}

let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
const authReducer = (state = authInitialState, action: any) => {
    return state
}

let rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer
})

const store = createStore(rootReducer)
type RootStateType = ReturnType<typeof rootReducer>

const selector = (state: RootStateType) => state.users.items

const Users = () => {

    const users = useSelector((state: RootStateType) => state.users)

    return <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
}

ReactDOM.render(<div>
        <Provider store={store}>
            <Users/>
        </Provider>
    </div>,
    document.getElementById('root')
)

// Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// ❗ Ответ дать минимально возможным объёмом кода




















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
