import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import axios, { AxiosError } from 'axios';
import { applyMiddleware, combineReducers, legacy_createStore as createStore, Dispatch } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';


// Types
type NullableType<T> = null | T
type UndefinedType<T> = undefined | T

type UserType = {
    avatar: string
    email: string
    first_name: string
    id: 1
    last_name: string
}

type LoginFieldsType = {
    email: string
    password: string
}

// API
const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

const reqresAPI = {
    getUsers() {
        return instance.get('users?delay=1&per_page=12')
    },
    login(data: LoginFieldsType) {
        return instance.post('login?delay=1', data)
    },
}


// Reducer
const initState = {
    isLoading: false,
    error: null as NullableType<string>,
    isLoggedIn: false,
    randomUser: null as NullableType<UserType>
}

type InitStateType = typeof initState

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'APP/SET-RANDOM-USER':
            return {...state, randomUser: action.user}
        case 'APP/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'APP/IS-LOADING':
            return {...state, isLoading: action.isLoading}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// Actions
const setRandomUserAC = (user: UserType) => ({type: 'APP/SET-RANDOM-USER', user} as const)
const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
const setLoadingAC = (isLoading: boolean) => ({type: 'APP/IS-LOADING', isLoading} as const)
const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
type ActionsType =
    | ReturnType<typeof setRandomUserAC>
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setError>


// Utils
const thunkFinallyHandler = (dispatch: Dispatch) => {
    dispatch(setLoadingAC(false))
    setTimeout(() => {
        dispatch(setError(null))
    }, 3000)
}

// Thunk
const getUsersTC = (): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true))

    const getRandomUser = (users: UserType[]): UndefinedType<UserType> => {
        const randomUserId = Math.floor(Math.random() * 12) + 1
        return users.find(u => u.id === randomUserId)
    }

    reqresAPI.getUsers()
        .then((res) => {
            const user = getRandomUser(res.data.data)
            if (user) {
                dispatch(setRandomUserAC(user))
            }
        })
        .catch((e: AxiosError) => {
            dispatch(setError(e.message))
        })
        .finally(() => {
            thunkFinallyHandler(dispatch)
        })
}

const loginTC = (values: LoginFieldsType): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true))
    reqresAPI.login(values)
        .then((res) => {
            dispatch(setIsLoggedIn(true))
            alert('Вы залогинились успешно')
        })
        .catch((e) => {
            const error = e.response ? (e.response?.data.error || 'Some error') : e.message
            dispatch(setError(error))
        })
        .finally(() => {
            thunkFinallyHandler(dispatch)
        })
}

// Store
const rootReducer = combineReducers({
    app: appReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
export const Loader = () => {
    return <h1>Loading ...</h1>
}

// Profile
export const Profile = () => {
    return <h2>😎 Profile</h2>
}

// Login
export const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const randomUser = useAppSelector(state => state.app.randomUser)
    const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
    const error = useAppSelector(state => state.app.error)
    const isLoading = useAppSelector(state => state.app.isLoading)

    useEffect(() => {
        dispatch(getUsersTC())
    }, [])

    const formik = useFormik({
        initialValues: {
            email: randomUser?.email ?? '',
            password: '',
        },
        enableReinitialize: true,
        onSubmit: values => {
            dispatch(loginTC(values))
        }
    });

    return (
        <div>
            {!!error && <h2 style={{color: 'red'}}>{error}</h2>}
            {isLoading && <Loader/>}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input placeholder={'Введите email'}
                           {...formik.getFieldProps('email')}/>
                </div>
                <div>
                    <input type={'password'}
                           placeholder={'Введите пароль'}
                           {...formik.getFieldProps('password')}/>
                </div>
                <button type="submit">Залогиниться</button>
            </form>
        </div>
    );
}

// App
export const App = () => {
    return (
        <Routes>
            <Route path={''} element={<Login/>}/>
            <Route path={'profile'} element={<Profile/>}/>
        </Routes>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)


// Описание:
// ❗ Логин вводить не нужно (из-за Api можно вводить только определенные email).
// Введите любой пароль и попробуйте залогиниться.
// Если вы увидели alert с успешным сообщением -
// это значит, что запрос успешно прошел.
// Задача: при успешной логинизации, редиректнуть пользователя на страницу Profile.
// Напишите правильную строку кода
// Пример ответа:  console.log('If login => redirect to profile')
