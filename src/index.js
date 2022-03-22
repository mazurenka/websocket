import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HocVsHook01} from "./HocVsHook01";
import {HocVsHook} from "./HocVsHook";
import {App2} from "./App2";
import {UsersManagement} from "./UsersManagement";


ReactDOM.render(
    <React.StrictMode>
        <UsersManagement/>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
