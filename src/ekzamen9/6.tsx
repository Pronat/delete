type UserType = {
    id: number
    userName: string
    email: string
    password: string
}

type ChangeUserPasswordTypeAT = {
    type: "CHANGE-USER-PASSWORD"
    payload: {
        id: number,
        newPassword: string
    }
}

export const userReducer =
    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
        switch (action.type) {
            case "CHANGE-USER-PASSWORD":
                return state.map(u =>
                    u.id === action.payload.id
                        ? {...u, password: action.payload.newPassword}
                        : u)
            default:
                return state
        }
    }

//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
//В ответе напишите через пробел: XXX  YYY

//id:number newPassword:string