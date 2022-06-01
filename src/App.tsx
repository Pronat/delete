import React, {useEffect, useState} from 'react';
import './App.css';
import {UsersList} from "./ekzamen2/2";


function App() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const startHandler = () => {
        alert(Array.isArray(users))
    }

        return (
        <div className="App">
            <button onClick={startHandler}>start</button>
            {/*<h1>{value}</h1>*/}
            {/*<button onClick={incHandler}>inc</button>*/}

        </div>
    );
}

export default App;


