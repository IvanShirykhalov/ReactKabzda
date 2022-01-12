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
            <Accordion title={'Menu1'}/>
            <Rating value={3}/>
            <Accordion title={'Menu2'}/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return (
        <h1>{props.title}</h1>
    )
}
 export default App



