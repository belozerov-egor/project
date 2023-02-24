import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It\'s my first post', likeNumber: 1},
                {id: 2, message: 'Hello friends', likeNumber: 10},
                {id: 3, message: 'it\'s cold outside', likeNumber: 23},
                {id: 4, message: 'PRIVET', likeNumber: 11}
            ],
            newPostText: ''
        },

        dialogsPage: {
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
            newMessageBody: ''
        },

        sidebar: {}
    },
    _callSubscriber() {
        console.log('State')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer - партерн, почитать!
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    }
};




export default store;
window.store = store;