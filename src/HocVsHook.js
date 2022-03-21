import './App.css';
import {useEffect, useRef, useState} from "react";

export function HocVsHook() {
    return (
        <div className="App">
            <div className={'chat'}>
                <Select values={['Minsk', "Moscow", 'Kiev']}/>
                <Textarea limit={10} value={'Yo'} placeholder={'Comment'}/>
            </div>
        </div>
    );
}

export const Textarea = ({limit, value, ...props}) => {
    let divStyles = {
        position: 'relative',
        width: '300px',
        height: '100px'
    }
    let textareaStyles = {
        position: 'absolute',
        width: '300px',
        height: '100px'
    }
    let spanStyles = {
        position: 'absolute',
        right: '3px',
        bottom: '3px'
    }
    const [currentValue, setValue] = useState(value)
    const onChange = (e) => {
        setValue(e.currentTarget.value)
    }

    return <div style={divStyles}>
        <textarea maxLength={limit}
                  onChange={onChange}
                  value={currentValue}
                  {...props}
                  style={textareaStyles}/>
        <span style={spanStyles}>{limit}</span>
    </div>
}

export const Select = ({values}) => {
    return <select>
        {values.map(v => <option>{v}</option>)}
    </select>
}



