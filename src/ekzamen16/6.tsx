import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

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
    getPhotos(page: number) {
        return instance.get<PhotoType[]>(`photos?_limit=2?_page${page}`)
    }
}


// App

const buttons = [
    {id: 1, title: '1'},
    {id: 2, title: '2'},
    {id: 3, title: '3'},
]

export const App = () => {

    const [photos, setPhotos] = useState<PhotoType[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        photosAPI.getPhotos(currentPage)
            .then((res) => {
                setPhotos(res.data)
            })
    }, [currentPage])

    const setPageHandler = (page: number) => {
        setCurrentPage(page)
    };

    return (
        <>
            <h1>📸 Список фоток</h1>
            {/* Photos */}
            {
                photos.map(p => {
                    return <div style={{marginBottom: '25px'}} key={p.id}>
                        <b>title</b>: {p.title}
                        <div><img src={p.thumbnailUrl} alt=""/></div>
                    </div>
                })
            }

            {/* Buttons */}
            {
                buttons.map(b => {
                    return (
                        <button key={b.id}
                                style={b.id === currentPage ? {backgroundColor: 'lightblue'} : {}}
                                onClick={() => setPageHandler(b.id)}>
                            {b.title}
                        </button>
                    )
                })
            }
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// Описание:
// Пагинация не работает.
// При переходе по страницам, контент (описание и изображение фоток) должен меняться.
// Подсказка. В одной строке кода допущено 2 ошибки.
// Задача: найти эти ошибки, и исправленную версию строки написать в качестве ответа.
// Пример ответа: const [currentPage, setCurrentPage] = useState(page)
