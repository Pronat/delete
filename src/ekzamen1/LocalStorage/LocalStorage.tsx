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

        const clearLocalStorageHandler = () => {
           let value2 = localStorage.clear()
            let value2Number = JSON.parse(value2)
            setValue(value2)
        }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
        </div>
    );
}