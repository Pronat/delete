import React, {useEffect, useState} from 'react';
import './App.css';
import {UsersList} from "./ekzamen2/2";
import {Post} from "./ekzamen4/3";


function App() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string) => <li>{user}</li>
    const startHandler = () => {
        alert(typeof getUser)
    }

        return (
        <div className="App">
            <Post />
            {/*<button onClick={startHandler}>start</button>*/}

        </div>
    );
}

export default App;


