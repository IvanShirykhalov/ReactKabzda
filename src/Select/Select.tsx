import React, {useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }


    const selected = props.items.find(i => i.value === props.value)

    return (
        <div className={s.select}>
            <span className={s.main} onClick={toggleItems}>{selected && selected.title}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(i =>
                        <div key={i.value}
                             onClick={() => onItemClick(i.value)}>
                            {i.title}
                        </div>)}
                </div>}
        </div>
    )
}