import React from 'react'
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

// Types
type PhotoType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

// Api
const instance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})

const photosAPI = {
    async getPhotos() {
        // Имитация длительного запроса, чтобы была видна крутилка
        await new Promise(resolve => setTimeout(resolve, 3000));
        return instance.get<PhotoType[]>('photos?_limit=3')
    },
}


// Reducer
const initState = {
    isLoading: false,
    photos: [] as PhotoType[]
}

type InitStateType = typeof initState

const photoReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'PHOTO/GET-PHOTOS':
            return {...state, photos: action.photos}
        case 'PHOTO/IS-LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

const getPhotosAC = (photos: PhotoType[]) => ({type: 'PHOTO/GET-PHOTOS', photos} as const)
const setLoadingAC = (isLoading: boolean) => ({type: 'PHOTO/IS-LOADING', isLoading} as const)
type ActionsType = ReturnType<typeof getPhotosAC> | ReturnType<typeof setLoadingAC>

const getPhotosTC = (): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true))
    photosAPI.getPhotos()
        .then((res) => {
            dispatch(getPhotosAC(res.data))
            // dispatch(setLoadingAC(false))
        })
}

// Store
const rootReducer = combineReducers({
    photo: photoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Loader
export const Loader = () => {
    return (
        <h1>Loading ...</h1>
    )
}

// App
const App = () => {
    const dispatch = useAppDispatch()
    const photos = useAppSelector(state => state.photo.photos)
    const isLoading = useAppSelector(state => state.photo.isLoading)

    const getPhotosHandler = () => {
        dispatch(getPhotosTC())
    };

    return (
        <>
            <h1>📸 Фото</h1>
            {isLoading && <Loader/>}
            {
                photos.map(p => {
                    return <div key={p.id}>
                        <b>title</b>: {p.title}
                        <div><img src={p.thumbnailUrl} alt=""/></div>
                    </div>
                })
            }
            <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
        </>
    )
}


// ReactDOM.render(<Provider store={store}> <App/></Provider>, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// При нажатии на кнопку "Подгрузить фотографии" вы должны увидеть Loading...,
// и через 3 секунды непосредственно фотографии.
// Но после подгрузки данных Loader не убирается.
// Какой код нужно написать, чтобы Loader перестал отображаться после получения данных
// В качестве ответа напишите строку кода.
// Пример ответа: console.log('stop Loader')


//правильно dispatch(setLoadingAC(false))