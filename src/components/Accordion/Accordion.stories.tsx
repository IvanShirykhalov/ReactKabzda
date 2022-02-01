import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    components: Accordion
}


const callback = action('accordion mode change event fired');
const onClickItem = action('some item was clicked')


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;
export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
    items: [{title: 'Ivan', value: 1}, {title: 'Andrei', value: 2}, {title: 'Kate', value: 3},
        {
            title: 'Svetlana',
            value: 4
        }],
    onClick: onClickItem

}

export const MenuDeployedMode = Template.bind({});
MenuDeployedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    onChange: callback,
    items: [{title: 'Ivan', value: 1}, {title: 'Andrei', value: 2}, {title: 'Kate', value: 3}, {
        title: 'Svetlana',
        value: 4
    }],
    onClick: onClickItem
}
export const ChangeMode = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <Accordion titleValue={'Users'} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}
                      items={[{title: 'Ivan', value: 1}, {title: 'Andrei', value: 2}, {
                          title: 'Kate',
                          value: 3
                      }, {title: 'Svetlana', value: 4}]} onClick={(title)=> {alert(`user ${title} should be happy`)}}/>
}