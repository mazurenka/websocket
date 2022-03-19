import './App.css';
import {useState} from "react";

export function AppContainer(props) {
    const [age, setAge] = useState(18)
    return (
        <div>
            <App {...props} age={age}/>
            <button onClick={() => {
                setAge(age * 10000)
            }}>+
            </button>
        </div>
    );
}

function App({age = 'no age', setAge}) {
    return (
        <div className="App">
            <div>age: {age}</div>
            <div>
                <button onClick={() => {
                    setAge(age + 1)
                }}>inc
                </button>
            </div>
        </div>
    );
}

export default App;
