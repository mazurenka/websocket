import './App.css';
import {useEffect, useState} from "react";

function App() {

    let [messageText, setMessageText] = useState('')
    let [users, setUsers] = useState([
        {id: 1, name: 'Andre', photo: 'https://via.placeholder.com/50', message: 'Yo!'}
    ])
    let ws;
    useEffect(() => {
        ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        ws.onmessage = (messageEvent) => {
            console.log(messageEvent);
        }
    }, [])

    let onMessageChange = (e) => {
        setMessageText(e.currentTarget.value)
    }

    let sendMessage = () => {
        ws.send(messageText)
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
                    <textarea onChange={onMessageChange}>{messageText}</textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default App;
