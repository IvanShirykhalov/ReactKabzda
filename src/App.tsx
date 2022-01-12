import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

export function App() {
    return (
        <div>
            <PageTitle title={'APP component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={2}/>
            <Accordion titleValue={'Menu1'} collapsedMenu={false}/>
            <Rating value={4}/>
            <Accordion titleValue={'Menu2'} collapsedMenu={true}/>
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



