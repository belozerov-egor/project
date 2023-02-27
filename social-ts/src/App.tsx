import React from 'react';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
                    <Route path='/profile'
                           render={ () => <Profile state={props.state.profilePage} /> }/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
