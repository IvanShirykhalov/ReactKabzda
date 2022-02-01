import React, {useState} from "react";
import {Rating, RatingPropsType, RatingValueType} from "./Rating";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating',
    components: Rating,
}

const callback = action('changes status of stars')

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>
export const EmptyStar = Template.bind({})
EmptyStar.args ={
    value: 0,
    onClick: callback
}
export const EmptyStar1 = Template.bind({})
EmptyStar1.args ={
    value: 1,
    onClick: callback
}
export const EmptyStar2 = Template.bind({})
EmptyStar2.args ={
    value: 2,
    onClick: callback
}
export const EmptyStar3 = Template.bind({})
EmptyStar3.args ={
    value: 3,
    onClick: callback
}
export const EmptyStar4 = Template.bind({})
EmptyStar4.args ={
    value: 4,
    onClick: callback
}
export const EmptyStar5 = Template.bind({})
EmptyStar5.args ={
    value: 5,
    onClick: callback
}
export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return <Rating value={value} onClick={setValue}/>
}