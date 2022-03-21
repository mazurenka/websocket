import './App.css';
import {useEffect, useRef, useState} from "react";

export function HocVsHook() {
    return (
        <div className="App">
            <div className={'chat'}>
                <Select values={['Minsk', "Moscow", 'Kiev']}/>
            </div>
        </div>
    );
}

export const Textarea = ({limit}) => {
    return <textarea/>
}

export const Select = ({values}) => {
    return <select>
        {values.map(v => <option>{v}</option>)}
    </select>
}



