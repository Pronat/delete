import React from 'react';

type PagePropsType = {
    age: number
    name: string
    avatarUrl: string
}
const Page: React.FC<PagePropsType> = (props) => {
    return <User a={xxx} n={yyy} />
}
type UserPropsType = {
    a: number
    n: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>name: {props.n}, age: {props.a}</div>
}