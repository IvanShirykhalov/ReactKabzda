import React, {useState} from "react";
import {UncontrolledOnOff, UncontrolledOnOffPropsType} from "./UncontrolledOnOff";
import {OnOffPropsType} from "../../onOff/OnOff";
import {Story} from "@storybook/react";

export default {
    title: 'UncontrolledOnOff',
    components: UncontrolledOnOff
}

const Template: Story<UncontrolledOnOffPropsType> = (args) => <UncontrolledOnOff {...args}/>
export const UncontrolledOff = Template.bind({})
UncontrolledOff.args = {
    on: false,
    defaultOn: false

}
export const UncontrolledOn = Template.bind({})
UncontrolledOn.args = {
    on: true,
    defaultOn: true
}