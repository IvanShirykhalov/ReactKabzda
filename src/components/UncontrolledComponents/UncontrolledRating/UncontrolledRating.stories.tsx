import React, {useState} from "react";
import { Star, UncontrolledRating} from "./UncontrolledRating";
import {Story} from "@storybook/react";
import {RatingPropsType} from "../../Rating/Rating";

export default {
 title: 'UncontrolledRating',
 components: UncontrolledRating
}

export const Template: Story<RatingPropsType> = (args) => <UncontrolledRating {...args}/>
export const Rating0 = Template.bind({})
Rating0.args = {
    value: 0
}
export const Rating1 = Template.bind({})
Rating1.args = {
    value: 1
}
