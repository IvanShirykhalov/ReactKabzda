import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

export function App() {
    return (
        <div>
            <OnOff/>
            {/*            <OnOff />*/}
            <PageTitle title={'APP component'}/>
            {/*            <PageTitle title={'My friends'}/>*/}
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            {/*           <Accordion titleValue={'Menu1'} collapsedMenu={false}/>
            <Rating value={4}/>
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



