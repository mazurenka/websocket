import './App.css';
import {useEffect, useRef, useState} from "react";

export function AppContainer(props) {

    let [age, setAge] = useState(30)

    return (
        <div className="App">
            <App {...props} />
        </div>
    );
}

function App({age = 'no age'}) {
    return (
        <div className="App">
            age: {age}
        </div>
    );
}

export default App;
