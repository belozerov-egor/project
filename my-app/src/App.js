import React, {useEffect} from 'react';
import './App.css';
import News from "./components/News/News";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";


const App = (props) =>   {
    useEffect(() => {
        props.initializeApp();
    },[])
if(!props.initialized){
    return <Preloader/>}
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="app-wrapper-content">

                    <Routes>
                        <Route path='/news' element={<News/>}/>

                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        {/* <Route path='/profile/' element={<ProfileContainer />} />*/}
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>

                        <Route path='/users' element={<UsersContainer/>}/>

                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>

            </div>
        );
    }

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})



export default compose(
    connect(mapStateToProps, { initializeApp} ))( App);
