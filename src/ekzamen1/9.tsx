import React from 'react';

import ReactDOM from 'react-dom'

const CrazyButton = (props: any) => {

    const style = {
        color: props.XXX,
        backgroundColor: props.YYY
    }

    return <button style={style}>
        {props.ZZZ}
    </button>
}

export const App = () => {
    return <div>
        <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
        <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)