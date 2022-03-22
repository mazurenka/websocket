import React, {useState} from "react";


export function App2() {
    const [counter, setCounter] = useState(0)
    const [year, setYear] = useState(2022)
    console.log('App render')
    return (
        <div className={'App'}>
            <Counter counter={counter}/>
            <Buttons onPlusClick={() => {
                setCounter(counter + 1)
            }}/>
            <Footer year={year}/>
        </div>
    )
}

function Counter(props) {
    console.log('Counter render')
    return (
        <div className={'App'}>
            {props.counter}
        </div>
    )
}

function Buttons(props) {
    console.log('Buttons rendered')
    return (
        <div>
            <button onClick={props.onPlusClick}>+</button>
        </div>
    )
}

const Footer = React.memo(function Footer(props) {
    console.log('Footer Render')
    return (
        <div>
            FOOTER {props.year}
        </div>
    )
})









