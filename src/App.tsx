import React, {useState} from 'react';
import './App.css';


function App() {
    const [value, setValue] = useState<number>(0)

    const incrementPlusOne = () => {
        setValue(value + 1)
    }
    const setToLocalStorage
  return (
    <div className="App">
        <h1>{value}</h1>
        <button onClick={incrementPlusOne}>inc</button>
        <button onClick={setToLocalStorage}>setToLocalStorage</button>
        <button onClick={getFromLocalStorage}>getFromLocalStorage</button>
    </div>
  );
}

export default App;
