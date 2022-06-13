
type Student = {
    id: number
    name: string
}
type Students = Array<Student>
type Friends = {
    [key: string]: Array<string>
}

export const students: Students = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Charley"},
]

export const friends: Friends = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}

//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Что вернёт выражение: Array.isArray(friends)?

//скорее всего false