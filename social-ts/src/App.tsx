import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import state from "./redux/state";
import Dialogs from "./component/Dialogs/Dialogs";
import Profile from './component/Profile/Profile';
import {BrowserRouter, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';

function App() {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs {...state.dialogsPage} /> }/>
                    <Route path='/profile'
                           render={ () => <Profile {...state.profilePage} /> }/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
