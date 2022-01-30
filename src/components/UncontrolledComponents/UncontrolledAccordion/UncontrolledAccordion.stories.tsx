import React, {useState} from "react";
import {AccordionBody, AccordionTitle, UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title:'UncontrolledAccordion',
    components: UncontrolledAccordion
}

export const Template = () => {
    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={'Menu'} onClick={()=>{setCollapsed(!collapsed)}}/>
        {!collapsed  && <AccordionBody/>}
    </div>
}