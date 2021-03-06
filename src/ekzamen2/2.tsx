import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    return (
        <p>Тут будет список пользователей!</p>
    )
}

ReactDOM.render(
    <UsersList />, document.getElementById('root')
);

// Что вернёт выражение: typeof useState?
// ответ - object

