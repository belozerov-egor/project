import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
/*const UPDATE_STATUS = 'UPDATE_STATUS'*/


let initialState = {

    posts: [
        {id: 1, message: 'It\'s my first post', likeNumber: 1},
        {id: 2, message: 'Hello friends', likeNumber: 10},
        {id: 3, message: 'it\'s cold outside', likeNumber: 23},
        {id: 4, message: 'PRIVET', likeNumber: 11}
    ],
    newPostText: '',
    profile: null,
    status: "",


}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeNumber: 0
            };
            const {posts} = state;
            return {
                posts: [...posts, newPost],
                newPostText: ''
            };
            /*            let stateCopy = {...state};
                        stateCopy.posts = [...state.posts];
                        stateCopy.posts.push(newPost);
                        stateCopy.newPostText = '';*/

            // return stateCopy;
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };


        default:
            return state;


    }


}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => (
    {
        type: SET_STATUS,
        status
    }
)


export const getProfile = (userId) =>
    async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data))

    }
export const getStatus = (userId) =>
    async (dispatch) => {
        let data = await profileAPI.getUserStatus(userId)
        dispatch(setStatus(data))


    }
export const updateStatus = (status) =>
    async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))

        }
}

        export default profileReducer;