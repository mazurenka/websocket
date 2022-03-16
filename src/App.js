import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {

    let messagesBlockRef = useRef()

    let [messageText, setMessageText] = useState('')
    let [ws, setWS] = useState(null)
    let [users, setUsers] = useState([])

    if (ws) {
        ws.onmessage = (messageEvent) => {
            let messages = JSON.parse(messageEvent.data)
            console.log(messageEvent);
            setUsers([...users, ...messages])
            messagesBlockRef.current.scrollTo(0, messagesBlockRef.current.scrollHeight)
        }
    }

    useEffect(() => {
        let localWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        setWS(localWS)
    }, [])

    let onMessageChange = (e) => {
        setMessageText(e.currentTarget.value)
    }

    let sendMessage = () => {
        ws.send(messageText)
        setMessageText('')
    }

    return (
        <div className="App">

            <div className={'chat'}>
                <div className={'messages'} ref={messagesBlockRef}>
                    {users.map((u, index) => <div className={'message'} key={index}>
                        <img src={u.photo}/> <b>{u.userName}</b> <span>{u.message}</span>
                    </div>)}
                </div>
                <div className={'footer'}>
                    <textarea onChange={onMessageChange} value={messageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default App;
