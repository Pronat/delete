import React, {useState} from 'react';
import './App.css';


function App() {
    const [value, setValue] = useState<number>(0)
    const incHandler = () => {
        setValue(value + 1)
        setIncrementHandler()
    }
    const setIncrementHandler = () => {
        localStorage.setItem('keyValue', JSON.stringify(value))

    }
    const getIncrementHandler = () => {
        let val = localStorage.getItem('keyValue')
        if (val) {
        setValue(JSON.parse(val))
    }}
        return (
        <div className="App">

            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setIncrementHandler}>setInc</button>
            <button onClick={getIncrementHandler}>getInc</button>

        </div>
    );
}

export default App;
