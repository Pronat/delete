
type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
    payload: number
}

export const calculator = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "EXP":
            return state ** action.payload
        default:
            return state
    }
}

//Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
//возможно  10