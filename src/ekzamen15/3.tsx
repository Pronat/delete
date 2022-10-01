import {combineReducers, createStore} from 'redux'

let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
const usersReducer = (state = initialState, action: any) => {
    return state
}

const store = createStore(combineReducers({
    users: usersReducer
}))

store.XXX(() => {
    console.log('state changed')
})

store.dispatch({type: 'ANY'})

// Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?
// subscribe