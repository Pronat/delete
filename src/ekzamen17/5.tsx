import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import axios from 'axios';


// Types
type PostType = {
    body: string
    id: number
    title: string
    userId: number
}

// Api
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const postsAPI = {
    getPosts() {
        return instance.get<PostType[]>('posts?_limit=10')
    },
    createPost() {
        const payload = {
            body: 'new post body',
            title: 'new post title',
            userId: 1
        }
        return instance.post('posts', payload)
    }
}

// Reducer
const initState = [] as PostType[]

type InitStateType = typeof initState

const postsReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'POSTS/GET-POSTS':
            return action.posts

        case 'POSTS/CREATE-POST':
            return [action.post, ...state]

        default:
            return state
    }
}


const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
const createPostAC = (post: PostType) => ({type: 'POSTS/CREATE-POST', post} as const)

type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof createPostAC>

const getPostsTC = (): AppThunk => (dispatch) => {
    postsAPI.getPosts()
        .then((res) => {
            dispatch(getPostsAC(res.data))
        })
}

const addPostTC = (): AppThunk => (dispatch) => {
    postsAPI.createPost()
        .then((res) => {
            dispatch(createPostAC(res.data))
        })
}

// Store
const rootReducer = combineReducers({
    posts: postsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// App
const App = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    const addPostHandler = () => {
        alert('Пост добавить не получилось. Напишите код самостоятельно 🚀')
    };

    return (
        <>
            <h1>📜 Список постов</h1>
            <button style={{marginBottom: '10px'}} onClick={addPostHandler}>Добавить пост</button>
            {
                posts.map(p => {
                    return <div key={p.id}><b>title</b>: {p.title}</div>
                })
            }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// При нажатии на кнопку "Добавить пост" пост должен добавиться,
// но появляется alert.
// Вместо alerta напишите код, чтобы пост добавлялся.
// Правильную версию строки напишите в качестве ответа.
// Пример ответа: return instance.get<PostType[]>('posts?_limit=10')
