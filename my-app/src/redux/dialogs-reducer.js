const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs:
        [
            {id: 1, name: 'Egor'},
            {id: 2, name: 'Julia'},
            {id: 3, name: 'Buch'},
            {id: 4, name: 'Lutick'},
        ],
    messages: [
        {id: 1, message: 'Hello Egor'},
        {id: 2, message: 'Hello Julia'},
        {id: 3, message: 'Hello Buck'},
        {id: 4, message: 'Hello Lutick'},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = {
                id: 5,
                message: action.newMessageBody
            };
            const { messages } = state;
            return {
                ...state,
                messages: [...messages, body],
            }}
/*                       let stateCopy = { ...state }
                       stateCopy.messages = [...state.messages]
                       stateCopy.messages.push(body);
                       stateCopy.newMessageBody = ''
                       return stateCopy; }
        */
        default:
            return state;


    }
}
export const sendMessageCreator =(newMessageBody)=> ({type: SEND_MESSAGE , newMessageBody})


    export default dialogsReducer;