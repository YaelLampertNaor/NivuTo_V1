import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Screens/Admin/Home';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main';
import Profile from '../Screens/Profile/Profile';
import Register_NewUser from '../Screens/Register/Register_NewUser';

export default function Main_Routes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register_NewUser/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/adminHome" element={<Home/>}/>
        </Routes>
    );
}
