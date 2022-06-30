type StudentType = {
    id: number
    name: string
}

type FriendsType = {
    [key: string]: Array<string>
}

export const students: Array<StudentType> = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Charley"},
]

export const friends: FriendsType = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}

const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
    const result: Array<string> = []
    friends[st_1.id].forEach(f => friends[xxx].includes(f)? result.push(f): null)
    return result
}

//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
// Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// у двух выбранных студентов.
//Функция принимает параметром два объекта типа StudentType
// и возвращает массив с именами общих друзей,
//если они есть и пустой массив, если таковых нету.
// Что надо написать вместо ххх, чтобы функция работала?

// st_2.id