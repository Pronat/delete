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
const newState = reducer(state, xxx)
console.log(newState[300].likesCount === 0)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// неправильно  addTrackAC