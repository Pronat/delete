export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'TRACK-LIKED':
            return {
                ...state,
                [id]: {
                    ...state[XXX],
                    likesCount: state[XXX].likesCount + 1
                }
            }
        default:
            return state
    }
}

const likeTrackAC = (trackId: number) => ({type: 'TRACK-LIKED', trackId})


const state = {
    12: {id: 12, likesCount: 10},
    14: {id: 14, likesCount: 2},
    100: {id: 100, likesCount: 0},
}
const newState = reducer(state, likeTrackAC(14))

console.log(newState[14].likesCount === 3)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?