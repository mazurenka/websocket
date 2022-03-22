import React, {useCallback, useMemo, useState} from "react";


export function App2() {
    const [counter, setCounter] = useState(0)
    const [year, setYear] = useState(2022)
    console.log('App render')

    const onPlusClick = () => {
        setCounter(counter + 1)
    }
    const onYearIncrement = useCallback(() => {
        setYear(year + 1)
    }, [year])

    /*let onYearIncrement = useMemo(() => {
        return () => {
            setYear(year + 1)
        }
    }, [year])*/

    return (
        <div className={'App'}>
            <Counter counter={counter}/>
            <Buttons onPlusClick={onPlusClick}/>
            <Footer year={year} onYearIncrement={onYearIncrement}/>
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
            <button onClick={props.onYearIncrement}>+</button>
        </div>
    )
})









