import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    components: Accordion
}

const callback = action('accordion mode change event fired');


export const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;
export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
 titleValue: 'Menu',
  collapsed: true,
  onChange: callback,
}

export const MenuDeployedMode = Template.bind({});
MenuDeployedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    onChange: callback,
}
 export const ChangeMode = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

     return <Accordion titleValue={'Menu'} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}/>
 }