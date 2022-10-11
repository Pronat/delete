import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

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
    getPhoto() {
        return instance.get<PhotoType>('photos/1')
    },
    updatePhotoTitle(payload: PhotoType) {
        return instance.put<PhotoType>(`photos/${payload.id}`, {payload})
    }
}


// App
export const App = () => {

    const [photo, setPhoto] = useState<PhotoType | null>(null)

    useEffect(() => {
        photosAPI.getPhoto()
            .then((res) => {
                setPhoto(res.data)
            })
    }, [])

    const updatePhotoHandler = () => {
        const payload = {
            title: 'Обновление произошло успешно 🚀',
            albumId: 1,
            id: 1,
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        }
        photosAPI.updatePhotoTitle(payload)
            .then((res) => {
                setPhoto(res.data)
            })
    };

    return (
        <>
            <h1>📸 Фото</h1>
            <div>
                <div style={{marginBottom: '15px'}}>
                    <b>title</b>: {photo?.title}
                    <button style={{marginLeft: '15px'}}
                            onClick={updatePhotoHandler}>
                        Обновить описание к фотографии
                    </button>
                </div>
                <div><img src={photo?.url} alt=""/></div>
            </div>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// Описание:
// При нажатии на кнопку "Обновить описание к фотографии" title должен обновиться
// на надпись "Обновление произошло успешно 🚀", но из-за невнимательности была допущена ошибка
//
// Найдите и исправьте ошибку
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: photosAPI.updatePhotoTitle(id, title)

// правильно  photosAPI.updatePhotoTitle(id, title)