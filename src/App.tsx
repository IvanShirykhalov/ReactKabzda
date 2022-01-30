import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledComponents/UncontrolledAccordion/UncontrolledAccordion";
import {RatingValueType, UncontrolledRating} from "./components/UncontrolledComponents/UncontrolledRating/UncontrolledRating";

export function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(true)

    return (
        <div className={'App'}>
            <PageTitle title={'APP component'}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'menu'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
{/*            <OnOff/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu'}/>
                        <OnOff />
                        <PageTitle title={'My friends'}/>
                       <Accordion titleValue={'Menu1'} collapsedMenu={false}/>
            <Accordion titleValue={'Menu2'} collapsedMenu={true}/>
           <UncontrolledAccordion titleValue={'Unem'}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App



