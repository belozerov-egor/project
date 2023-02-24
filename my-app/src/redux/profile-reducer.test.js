import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";



test('new post should be added', () => {
    let action = addPostActionCreator("it-kamasutra")
    let state = {

        posts: [
            {id: 1, message: 'It\'s my first post', likeNumber: 1},
            {id: 2, message: 'Hello friends', likeNumber: 10},
            {id: 3, message: 'it\'s cold outside', likeNumber: 23},
            {id: 4, message: 'PRIVET', likeNumber: 11}
        ]


    }
    let newState = profileReducer(state,action);
    expect( newState.posts.length).toBe(5)
    expect( newState.posts[4].message).toBe("it-kamasutra")
});


