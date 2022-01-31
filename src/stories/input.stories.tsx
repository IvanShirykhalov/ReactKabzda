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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const value = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <><input value={parentValue} onChange={value}/> value: {parentValue}</>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const valueCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <><input type={'checkbox'} checked={parentValue} onChange={valueCheck}/> {`checkbox: ${parentValue}`}</>
}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option></option>
        <option value={'1'}>Kiev</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Minsk</option>

    </select>
}