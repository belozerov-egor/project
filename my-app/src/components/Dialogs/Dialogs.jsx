import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useForm} from "react-hook-form";


const Dialogs = (props) => {

    let store = props.dialogsPage;

    let dialogsElements = store.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = store.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = store.newMessageBody;


    const {register, handleSubmit} = useForm();
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
            <form onSubmit={handleSubmit(addNewMessage)}>
                <textarea {...register('newMessageBody')}
                          placeholder="Enter new message">
            </textarea>
                <button>Send message</button>
            </form>
        </div>
    )
}





export default Dialogs;