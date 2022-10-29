import React from 'react'
import ReactDOM from 'react-dom/client';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
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
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const photosAPI = {
    getPhotos() {
        return instance.get<PhotoType[]>('photos?_limit=3')
    },
}


// Reducer
const initState = [] as PhotoType[]

type InitStateType = typeof initState

const photoReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'PHOTO/GET-PHOTOS':
            return action.photos

        default:
            return state
    }
}

const getPhotosAC = (photos: PhotoType[]) => ({type: 'PHOTO/GET-PHOTOS', photos} as const)
type ActionsType = ReturnType<typeof getPhotosAC>

const getPhotosTC = (): AppThunk => (dispatch) => {
    photosAPI.getPhotos()
        .then((res) => {
            dispatch(getPhotosAC(res.data))
        })
}

// Store
const rootReducer = combineReducers({
    photo: photoReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// Components
const App = () => {
    const dispatch = useAppDispatch()
    const photos = useAppSelector(state => state.photo)

    const getPhotosHandler = () => {
        dispatch(getPhotosTC())
    };

    return (
        <>
            <h1>📸 Фото</h1>
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


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Provider store={store}> <App/></Provider>)

// Описание:
// При нажатии на кнопку "Подгрузить фотографии" вы должны увидеть список фотографий,
// но ничего не подгружается.
// Найдите и исправьте ошибку.
// Debugger / network / console.log вам в помощь.
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: type InitStateType = typeof initState
