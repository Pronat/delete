import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import axios, { AxiosError } from 'axios';


// Types
type PostType = {
    body: string
    id: number
    title: string
    userId: number
}

// Api
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/ '
})

const postsAPI = {
    getPosts() {
        return instance.get<PostType[]>('posts')
    },
}

// Reducer
const initState = {
    error: null as string | null,
    posts: [] as PostType[]
}

type InitStateType = typeof initState

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'POSTS/GET-POSTS':
            return {...state, posts: action.posts}

        case 'POSTS/SET-ERROR':
            return {...state, error: action.error}

        default:
            return state
    }
}


const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
const setError = (error: string | null) => ({type: 'POSTS/SET-ERROR', error} as const)
type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof setError>

// Thunk
const getPostsTC = (): AppThunk => (dispatch) => {
    postsAPI.getPosts()
        .then((res) => {
            debugger
            dispatch(getPostsAC(res.data))
        })
        .catch((e: AxiosError) => {
            // dispatch(setError(e.message))
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


// Components
export const App = () => {

    const dispatch = useAppDispatch()

    const posts = useAppSelector(state => state.app.posts)
    const error = useAppSelector(state => state.app.error)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
        <>
            <h1>📜 Список постов</h1>
            {
                posts.length
                    ?
                    posts.map(c => {
                        return <div key={c.id}><b>Описание</b>: {c.body} </div>
                    })
                    :
                    <h3>❌ Посты не подгрузились. Произошла какая-то ошибка. Выведите сообщение об ошибке на экран</h3>
            }
            <h2 style={{color: 'red'}}>{!!error && error}</h2>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// ❌ Посты не подгрузились. Произошла какая-то ошибка.
// Чинить приложение не нужно (если только для себя, в ответе это не учитывается).
// Задача: вывести сообщение об ошибке на экран.
// В качестве ответа указать строку коду, которая позволит это осуществить
// Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk))


// правильно  dispatch(setError(e.message))