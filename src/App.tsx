import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
    const [value, setValue] = useState<number>(0)

    useEffect(()=>{
        let val = localStorage.getItem('keyValue')
        if (val) {
            let newVal = JSON.parse(val)
            setValue(newVal)
        }}, [])

    useEffect(()=>{
        localStorage.setItem('keyValue', JSON.stringify(value))
    },[value])

    const incHandler = () => {
        setValue(value + 1)
    }


        return (
        <div className="App">

            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>

        </div>
    );
}

export default App;
