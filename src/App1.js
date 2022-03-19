import './App.css';
import {useEffect, useRef, useState} from "react";

export function AppContainer(props) {

    let [age, setAge] = useState(18)

    return (
        <div className="App">
            <App {...props} age={age} satAge={setAge()} />
        </div>
    );
}

function App({age = 'no age', setAge}) {
    return (
        <div className="App">
            <div>age: {age}</div>
            <div>
                <button onClick={ () => {setAge(age + 1)} } >inc</button>
            </div>
        </div>
    );
}

export default App;
