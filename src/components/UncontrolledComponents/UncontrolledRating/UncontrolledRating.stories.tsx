import React from "react";
import { UncontrolledRating, UncontrolledRatingPropsType} from "./UncontrolledRating";
import {Story} from "@storybook/react";


export default {
 title: 'UncontrolledRating',
 components: UncontrolledRating
}

export const Template: Story<UncontrolledRatingPropsType> = (args) => <UncontrolledRating{...args}/>
export const Rating0 = Template.bind({})
Rating0.args = {
startValue: 0
}
export const Rating1 = Template.bind({})
Rating1.args = {
startValue: 1
}
export const Rating2 = Template.bind({})
Rating2.args = {
 startValue: 2
}
export const Rating3 = Template.bind({})
Rating3.args = {
 startValue: 3
}
export const Rating4 = Template.bind({})
Rating4.args = {
 startValue: 4
}
export const Rating5 = Template.bind({})
Rating5.args = {
 startValue: 5
}
