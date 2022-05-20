import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdDisplay from "../../pages/adDisplay/adDisplay";
import Home from "../../pages/home/home";
import Login from '../../pages/login/login';
import Menu from "../../pages/menu/menu";
import routers from './routers.json';
import { Navigate } from 'react-router-dom';
import Ad from "../../pages/ad/ad";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routers.initial} element={<Home />} />
                <Route path={routers.login} element={<Login />} />
                <Route path='/ad/display/embed' element={<AdDisplay token={window}/>}/>
                <Route path='/Menu' element={localStorage.getItem('userId') ? <Menu/> : <Navigate to="/" /> }/>
                <Route path='/ads' element={localStorage.getItem('userId') && localStorage.getItem('type') === 'Sponsors' ? <Ad/> : <Navigate to="/" /> }/> 
            </Routes>
        </BrowserRouter>
    ) 
}
export default Router;
