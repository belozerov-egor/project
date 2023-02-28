import React from 'react';
import s from './../Dialogs.module.css';
import {MessagesType} from "../../../redux/state";


const Message = (props: MessagesType) => {
    return <div>{props.message}</div>
}

export default Message;