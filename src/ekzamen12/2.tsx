import {combineReducers, createStore} from 'redux'

let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
const usersReducer = (state = initialState, action: any) => {
    return state
}

const store = createStore(combineReducers({
    users: usersReducer
}))

store.subscribe(() => {
    const state = XXX
    console.log(state)
})

store.dispatch({type: 'ANY'})

//Что нужно написать вместо XXX, чтобы получить актуальный стейт?

//неправильно initialState
//возможно store.dispatch