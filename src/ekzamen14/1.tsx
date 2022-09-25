import {combineReducers, createStore} from 'redux'

let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
const usersReducer = (state = initialState, action: any) => {
    return state
}

let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
const authReducer = (state = authInitialState, action: any) => {
    return state
}

const store = createStore(combineReducers({
    users: usersReducer,
    XXX
}))

store.subscribe(() => {
    const login = store.getState().auth.login
    console.log(login)
})

store.dispatch({type: 'ANY'})
export default store;

// Что нужно написать вместо XXX, чтобы в консоли увидеть 'Margo'?

//попробовать   auth: authReducer