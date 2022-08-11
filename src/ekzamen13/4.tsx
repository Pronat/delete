import React, {useState, useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const changeCounter = (state: number, action: any): number => {
    switch (action.type) {
        case "INC_VALUE":
            return state + 1
        case "RESET":
            return 0
        case "DEC_VALUE":
            return state - 1
        default:
            return state
    }
}

function Counter() {
    const [value, setValue] = XXX(changeCounter, 0)
    const [isCounter, setIsCounter] = YYY(true)
    const commonStyles: React.CSSProperties = {
        border: "1px solid black",
        margin: "100px auto",
        width: "300px",
        height: "150px",
        textAlign: "center",
    }
    const btnStyles: React.CSSProperties = {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "darkgray",
        borderRadius: "3px",
        minWidth: "40px"
    }

    return (
        <div style={commonStyles}>{
            isCounter
                ? <div >
                    <div style={{marginBottom: "20px"}}>
                        <h2>{value}</h2>
                        <button
                            style={{...btnStyles, backgroundColor: "red"}}
                            onClick={() => setIsCounter(false)}>OFF</button>
                    </div>
                    <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
                    <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
                    <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>

                </div>
                : <div style={{textAlign: "center"}}>
                    <h2>Counter not working</h2>
                    <button
                        style={{...btnStyles, backgroundColor: "green"}}
                        onClick={() => setIsCounter(true)}>ON</button>
                </div>
        }
        </div>
    )
}


ReactDOM.render(
    <Counter/>, document.getElementById('root')
);
// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.

// useReducer useState