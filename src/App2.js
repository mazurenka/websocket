import React, {useState} from "react";


export function App2() {
    const [counter, setCounter]=useState(0)

    return (
        <div className={'App'}>
            <Counter counter={counter} />
        </div>
    )
}

function Counter(props) {
    return (
        <div className={"App"}>
            {props.counter}
        </div>
    )
}



