import React, {useState} from 'react';
import './App.css';


function App() {
    const [value, setValue] = useState<number>(0)
    const addPlusOneIncrement = () => {
        setValue(value + 1)
    }
    const setIncrement = () => {
        localStorage.setItem('keyValue', JSON.stringify(value))

    }
        return (
        <div className="App">

            <h1>{value}</h1>
            <button onClick={addPlusOneIncrement}>inc</button>
            <button onClick={setIncrement}>setInc</button>

        </div>
    );
}

export default App;
