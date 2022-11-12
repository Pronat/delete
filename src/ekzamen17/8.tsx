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
        return instance.get<PostType[]>('posts?_limit=15')
    },
    updatePostTitle(post: PostType) {
        return instance.put<PostType>(`posts/${post.id}`, post)
    }
}


// Reducer
const initState = [] as PostType[]

type InitStateType = typeof initState

const postsReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'POSTS/GET-POSTS':
            return action.posts

        case 'POSTS/UPDATE-POST-TITLE':
            return state.map((p) => {
                if (p.id === action.post.id) {
                    return {...p, title: action.post.title}
                } else {
                    return p
                }
            })

        default:
            return state
    }
}

const getPostsAC = (posts: PostType[]) => ({type: 'POSTS/GET-POSTS', posts} as const)
const updatePostTitleAC = (post: PostType) => ({type: 'POSTS/UPDATE-POST-TITLE', post} as const)
type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof updatePostTitleAC>

const getPostsTC = (): AppThunk => (dispatch) => {
    postsAPI.getPosts()
        .then((res) => {
            dispatch(getPostsAC(res.data))
        })
}

const updatePostTC = (postId: number): AppThunk => (dispatch, getState: any) => {
    try {
        const currentPost = getState().find((p: PostType) => p.id === postId)

        if (currentPost) {
            const payload = {...currentPost, title: 'Летим 🚀'}
            postsAPI.updatePostTitle(payload)
                .then((res) => {
                    dispatch(updatePostTitleAC(res.data))
                })
        }
    } catch (e) {
        alert('Обновить пост не удалось 😢')
    }

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

    const updatePostHandler = (postId: number) => {
        dispatch(updatePostTC(postId))
    }

    return (
        <>
            <h1>📜 Список постов</h1>
            {
                posts.map(p => {
                    return <div key={p.id}>
                        <b>title</b>: {p.title}
                        <button onClick={() => updatePostHandler(p.id)}>Обновить пост</button>
                    </div>
                })
            }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// Попробуйте обновить пост и вы увидите alert с ошибкой.
// Debugger / network / console.log вам в помощь
// Найдите ошибку и вставьте исправленную строку кода в качестве ответа.
// Пример ответа: const payload = {...currentPost, tile: 'Летим 🚀'}
// Подсказка. Избавьтесь от всех any и решение придет само собой 😉


//неправильно    const currentPost = getState().posts.find((p: any) => p.id === postId)