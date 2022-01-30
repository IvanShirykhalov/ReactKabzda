import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type UncontrolledRatingPropsType = {
    startValue: RatingValueType
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    let [value, setValue] = useState<RatingValueType>( props.startValue ? props.startValue :0)

    return (
        <div>
            <Star selected={value > 0} setValue={()=>setValue(1)}/>
            <Star selected={value > 1} setValue={()=>setValue(2)}/>
            <Star selected={value > 2} setValue={()=>setValue(3)}/>
            <Star selected={value > 3} setValue={()=>setValue(4)}/>
            <Star selected={value > 4} setValue={()=>setValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    //value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: () => void
}

export function Star(props: StarPropsType) {

    const onStyle = {
        color: 'red',
    }
    const offStyle = {
        color: 'black',
    }

    return (
        <span onClick={props.setValue}>
        {props.selected ? <b style={onStyle}> ★ </b> : <b style={offStyle}> ★ </b>}
    </span>
    )
}