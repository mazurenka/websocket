import './App.css';
import {useState} from "react";

function App() {

    const [message, setMessage] = useState('')
    const [users, setUsers] = useState([
        {id: 1, name: 'Andre', photo: 'https://via.placeholder.com/50', message: 'Yo!'}
    ])

    let onMessageChange = (e) => {
        setMessage(e.currentTarget.value)
    }

    let sendMessage = () => {
        alert(message)
    }

    return (
        <div className="App">

            <div className={'chat'}>
                <div className={'messages'}>
                    {users.map(u => <div className={'message'}>
                        <img src={u.photo}/> <b>{u.name}</b> <span>{u.message}</span>
                    </div>)}
                </div>
                <div className={'footer'}>
                    <textarea onChange={onMessageChange}>{message}</textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default App;
