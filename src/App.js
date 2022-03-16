import './App.css';

function App() {

    let sendMessage = () => {
        alert('Hey')
    }

    return (
        <div className="App">

            <div className={'chat'}>
                <div className={'messages'}>
                    <div className={'message'}>
                        <img/> <b>Dima</b> <span>Hello guys</span>
                    </div>

                    <div className={'message'}>
                        <img/> <b>Andre</b> <span>Hello guys</span>
                    </div>

                </div>
                <div className={'footer'}>
                    <textarea/>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>

        </div>
    );
}

export default App;
