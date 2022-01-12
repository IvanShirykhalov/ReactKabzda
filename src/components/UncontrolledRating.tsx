import React, {useState} from "react";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating (props: RatingPropsType) {

    let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return (
        <div>
            < button onClick={()=>{setValue(1)}}><Star selected={value > 0}/></button>
            <button onClick={()=>{setValue(2)}}><Star selected={value > 1}/></button>
            <button onClick={()=>{setValue(3)}}><Star selected={value > 2}/></button>
            <button onClick={()=>{setValue(4)}}><Star selected={value > 3}/></button>
            <button onClick={()=>{setValue(5)}}><Star selected={value > 4}/></button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        padding: '2px',
        color: 'red',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        marginLeft: '2px',
        padding: '2px',
        color: 'white',
    }

    if (props.selected) {
        return <span style={onStyle}><b>x</b></span>
    } else {
        return <span style={offStyle}>x</span>
    }

}