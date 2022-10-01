export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'TRACK-DELETED':
            return state.filter((track: any) => XXX)
        default:
            return state
    }
}

const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})


const state = [
    {id: 12, likesCount: 10},
    {id: 14, likesCount: 2},
    {id: 100, likesCount: 0}
]
const newState = reducer(state, deleteTrackAC(14))

console.log(newState.length === 2)


// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?
// track.id !== action.trackId