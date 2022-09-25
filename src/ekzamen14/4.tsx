export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'USER-NAME-UPDATED':
            return XXX

        default:
            return state
    }
}

const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})


const state = {
    count: 10,
    user: {
        name: 'Dimych',
        age: 18,
        isMarried: true,
        status: "offline"
    },
    books: ['you don\'t know JS']
}
const newState = reducer(state, updateUserNameAC('Dmitry'))

console.log(newState.user.name === 'Dmitry')
console.log(newState.books === state.books)
console.log(newState.user !== state.user)

//Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?

//