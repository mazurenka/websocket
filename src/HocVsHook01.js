import './App.css';
import {useEffect, useRef, useState} from "react";

export function HocVsHook01() {
    return (
        <div className="App">
            <div className={'chat'}>
                <Select values={['Minsk', "Moscow", 'Kiev']} value={'Moscow'}/>
                <Textarea limit={10} value={''} placeholder={'Comment'}/>
            </div>
        </div>
    );
}

export const Textarea = ({limit, value = '', ...props}) => {
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
        localStorage.setItem('textarea', e.currentTarget.value)
    }

    useEffect(() => {
        const value = localStorage.getItem('textarea') || ''
        setValue(value)
    }, [])

    return <div style={divStyles}>
        <textarea maxLength={limit}
                  onChange={onChange}
                  value={currentValue}
                  {...props}
                  style={textareaStyles}/>
        <span style={spanStyles}>{limit - currentValue.length}</span>
    </div>
}

export const Select = ({values, value='', ...props}) => {

    const [currentValue, setValue] = useState(value)

    const onChange = (e) => {
        setValue(e.currentTarget.value)
        localStorage.setItem('select', e.currentTarget.value)
    }

    useEffect(() => {
        const value = localStorage.getItem('select') || ''
        setValue(value)
    }, [])

    return <select value={currentValue} {...props} onChange={onChange} >
        {values.map(v => <option>{v}</option>)}
    </select>
}



