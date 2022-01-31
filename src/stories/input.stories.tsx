import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={'value'}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <><input onChange={onChange}/> {value}</>
}

export const GetValueAfterButtonClick = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const actualValue = () => {
        const av = inputRef.current as HTMLInputElement
        setValue(av.value)
    }


    return <><input ref={inputRef}/><button onClick={actualValue}>save</button> actual value: {value}</>
}