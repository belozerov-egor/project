import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

const Dialogs  = (props: DialogsPageType) => {
    let dialogsElements =  props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.messages.map( m => <Message id={m.id} message={m.message}/> );

    return (
        <div >
            <div >
                { dialogsElements }
            </div>
            <div >
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;