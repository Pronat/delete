export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'TRACK-ADDED':
            return XXX
        default:
            return state
    }
}

const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})


const state = [
    {id: 12, likesCount: 10},
    {id: 14, likesCount: 2},
    {id: 100, likesCount: 0}
]
const newState = reducer(state, addTrackAC(300))

console.log(newState[3].likesCount === 0)

// Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?


// возможно
// {...state, trackId: action.trackId}