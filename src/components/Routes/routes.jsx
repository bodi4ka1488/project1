import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../About/About';
import { Clientu } from '../Clientu/Clientu';
import { Contact } from '../Contact/Contact';
import { Main } from '../Main/Main';
import { Revievs } from '../Revievs/Revievs';
import { Servise } from '../Servise/Servise';

export const NavRoutes = () => {
    return (
        <Routes>
            <Route path='/main' element={<Main/>}/>
            <Route path='/servise' element={<Servise/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/revievs' element={<Revievs/>}/>
            <Route path='/clients' element={<Clientu/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );
};
