import './App.css';
import {useEffect, useRef, useState} from "react";

export function HocVsHook() {
    return (
        <div className="App">
            <div className={'chat'}>
                <Select values={['Minsk', "Moscow", 'Kiev']} value={'Moscow'}/>
                <Input placeholder={'Name'}/>
                <Textarea limit={10} value={''} placeholder={'Comment'}/>
            </div>
        </div>
    );
}

const withLocalStorageSaving = (lsKey) => (Component) => {
    let LocalStorageSaving = ({value, ...props}) => {

        const [currentValue, setValue] = useState(value)
        const onChange = (e) => {
            setValue(e.currentTarget.value)
            localStorage.setItem(lsKey, e.currentTarget.value)
        }

        useEffect(() => {
            const value = localStorage.getItem('lsKey') || ''
            setValue(value)
        }, [])

        return <Component  {...props} onChange={onChange} value={currentValue}/>
    }
    return LocalStorageSaving
}

const useLocalStorageSaving = (lsKey, value) => {
    const [currentValue, setValue] = useState(value)
    const onChange = (e) => {
        setValue(e.currentTarget.value)
        localStorage.setItem(lsKey, e.currentTarget.value)
    }

    useEffect(() => {
        const value = localStorage.getItem(lsKey) || ''
        setValue(value)
    }, [])
    return [currentValue, onChange]
}

let Textarea = ({limit, value = '', ...props}) => {
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

    let [currentValue, onChange] = useLocalStorageSaving('textarea', value)

    return <div style={divStyles}>
        <textarea maxLength={limit}
                  onChange={onChange}
                  value={currentValue}
                  style={textareaStyles}
                  {...props}
        />
        <span style={spanStyles}>{limit - value.length}</span>
    </div>
}

Textarea = withLocalStorageSaving('textarea')(Textarea)

let Input = (props) => {
    return <div>
        <input {...props} />
    </div>
}

Input = withLocalStorageSaving('input')(Input)

let Select = ({values, value, ...props}) => {
    let [currentValue, onChange] = useLocalStorageSaving('select', value)

    return <select value={currentValue}  {...props} onChange={onChange}>
        {values.map(v => <option>{v}</option>)}
    </select>
}




