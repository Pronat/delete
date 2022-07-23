type Status = 'Stopped' | 'Playing' | 'Paused'
type StateType = {
    volume: number // in percents
    trackUrl: string // 'https://blabla.com/track01.mp3',
    currentPlayPosition: number // milliseconds,
    status: Status
}

export const playerReducer = (state: StateType, action: any) => {
    switch (action.type) {
        case XXX:
            return {
                ...state,
                trackUrl: action.url
            }
        default:
            return state
    }
}

const muteTrackAC = () => ({type: 'TRACK-MUTED'})
const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

//Какой тип должен быть вместо XXX?
