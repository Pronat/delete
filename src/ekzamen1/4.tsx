import React from 'react';

type PropsType = {
    city: string
    country: string
    coords?: string
}
// 'belarus', 'minsk', '53.917501,27.604851'
export const Wrapper1 = () => {
    return <PropsComponent1 city='minsk' />
}

export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}