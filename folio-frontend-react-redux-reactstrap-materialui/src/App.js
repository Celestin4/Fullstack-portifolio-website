import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Pages/MainLayout'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import './App.css';


const App = () => {

return (
    <div className="App">
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
           </Routes>
        </BrowserRouter>
    </div>
);
};

export default App;