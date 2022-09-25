export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'TRACK-ADDED':
            return {
                ...state,
                [action.trackId]: {
                    id: action.trackId, likesCount: 0
                }
            }
        default:
            return state
    }
}

const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})

const state = {
    12: {id: 12, likesCount: 10},
    14: {id: 14, likesCount: 2},
    100: {id: 100, likesCount: 0},
}
const newState = reducer(state, addTrackAC(300))
console.log(newState[300].likesCount === 0)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// неправильно  addTrackAC





















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
