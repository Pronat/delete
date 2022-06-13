type StudentType = {
    id: number
    name: string
    age: number
}

type FriendsType = {
    [key: string]: Array<string>
}


export const students: Array<StudentType> = [
    {id: 1, name: "Bob", age: 34},
    {id: 2, name: "Alex", age: 23},
    {id: 3, name: "Ann", age: 25},
    {id: 4, name: "Charley", age: 20},
]

export const friends: FriendsType = {
    1: ["Jack","Oliver", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William",  "Lewis","Michael"],
    4: ["Oscar", "Thomas", "William",],
}

//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Имеют ли студенты students[1] и students[3] общих друзей?
//Если да, напишите в ответе имя общего друга, если нет - напишите в ответе false.

// неверно false
// возможно Thomas