import * as React from "react";
import './index.css';
import reportWebVitals from './reportWebVitals';
import UsersManagement from "./UsersManagement";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <UsersManagement/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
