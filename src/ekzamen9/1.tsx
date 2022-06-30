
type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"
    payload: number
}

export const calculator = (state: number, action: ActionType) => {
    switch (ХХХ) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        default:
            return state
    }
}

//Что надо написать вместо ХХХ, чтобы функция calculator работала?

// action.type