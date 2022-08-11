import React, {useCallback, useState} from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
    const [temp, setTemp] = useState(10)
    const [seconds, setSeconds] = useState(100)

    const increaseSeconds = () => setSeconds(seconds + 10)
    // useEffect(() => setCounter(count + 1), [count]) - пример
    // const increaseTemp = XXX
    const increaseTemp = useCallback(() => setTemp(temp + 1),[temp])

    return <>
        <TempDisplay temp={temp} increaseTemp={increaseTemp}/>

        <div>
            <b>Секунды :</b> {seconds} с
            <button style={{marginLeft: '15px'}}
                    onClick={increaseSeconds}>
                Увеличить на 10 секунд
            </button>
        </div>
    </>
}
const TempDisplay = React.memo((props: any) => {
    console.log('Render TempDisplay')
    return (
        <div style={{marginBottom: '15px'}}
             onClick={props.reset}>
            <b>Температура:</b> {props.temp} &#176;
            <button style={{marginLeft: '15px'}}
                    onClick={props.increaseTemp}>
                Увеличить температуру на 1 градус
            </button>
        </div>
    )
})

ReactDOM.render(<App/>, document.getElementById('root'));

// Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
// 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
// 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"

// Пример ответа: useEffect(() => setCounter(count + 1), [count])

// возможно const increaseTemp = useCallback(() => setTemp(temp + 1),[temp])