import React from "react";
import {AccordionPropsType, UncontrolledAccordion} from "./UncontrolledAccordion";
import {Story} from "@storybook/react";

export default {
    title:'UncontrolledAccordion',
    components: UncontrolledAccordion
}

const Template: Story<AccordionPropsType> = (args) => <UncontrolledAccordion {...args}/>
export const UnAccordion = Template.bind({})
UnAccordion.args = {
    titleValue: 'Menu'
}