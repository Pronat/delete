import React, {useState} from 'react';
import './App.css';


function App() {
    const [value, setValue] = useState<number>(0)
    const incHandler = () => {
        setValue(value + 1)
    }

    const setIncHandler = () => {
        localStorage.setItem('newValue', JSON.stringify(value))
        localStorage.setItem('newValue1', JSON.stringify(value+1))
    }

    const getIncHandler = () => {
        let val = localStorage.getItem('newValue')
        if(val) {
        setValue(JSON.parse(val))   }}

    const remIncHandler = () => {
        localStorage.removeItem('newValue')
    }

    const clrIncHandler = () => {
        localStorage.clear()
    }

        return (
        <div className="App">
            <h1>{value}</h1>
           <button onClick={incHandler}>inc</button>
           <button onClick={setIncHandler}>setInc</button>
           <button onClick={getIncHandler}>getInc</button>
           <button onClick={remIncHandler}>remInc</button>
           <button onClick={clrIncHandler}>clrInc</button>
        </div>
    );
}

export default App;
