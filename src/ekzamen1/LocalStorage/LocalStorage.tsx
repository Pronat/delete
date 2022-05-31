import React, {useState} from 'react';

export const LocalStorage = () => {
    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }
    const getFromLocalStorageHandler = () => {
        let newValue = localStorage.getItem('counterValue')
        if (newValue) {
            let newValueNumber = JSON.parse(newValue)
            setValue(newValueNumber)
        }

    }
    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
        </div>
    );
}