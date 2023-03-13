import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {


        return <div>

            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed  && <AccordionBody/>}
        </div>

}
// Выше все тоже самое, что и ниже, только короче
/*function Accordion2(props: AccordionPropsType) {

    if (props.collapsed === true) {
        return <div>

            <AccordionTitle title={props.titleValue}/>
        </div>
    }
 else {
    return <div>

        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </div>
}
}*/

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion