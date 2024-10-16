import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Join from './Join';
import UserInfo from './UserInfo';
import Admin from './Admin';
import Home from './Home';

import Buttons from './material-ui/components/inputs/Buttons'

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/join" element={<Join/>}/>
                <Route path="/userInfo" element={<UserInfo/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/home" element={<Home/>}/>

                <Route path="/material-ui/components/inputs/buttons" element={<Buttons/>}/>
            </Routes>
        </div>
    );
}

export default Main;
