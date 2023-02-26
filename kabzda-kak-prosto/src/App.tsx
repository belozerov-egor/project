import React from 'react';
import Accordion from "./Accordion";
import {Rating} from "./Rating";

function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Arcticle 1
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}/>
            Arcticle 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
