import React, {useState} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {OnOff, OnOffPropsType} from "./OnOff";

export default {
    title: 'OnOff',
    components: OnOff,
}



const callback = action('changes status of OnOff')

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>
export const ChangeOnOff = Template.bind({})
ChangeOnOff.args = {
    on: false,
    onChange: callback
}
export const On = Template.bind({})
On.args = {
    on: true,
    onChange: callback
}
export const Off = Template.bind({})
Off.args = {
    on: false,
    onChange: callback
}

