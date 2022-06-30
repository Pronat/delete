
type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"
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
        case "MULT":
            return state * action.payload
        default:
            return state
    }
}

const result = calculator(10, {XXX, payload: 5})
console.log(result)
//Что надо написать вместо XXX, что бы переменная result содержала значение 5?

// type: "SUB"