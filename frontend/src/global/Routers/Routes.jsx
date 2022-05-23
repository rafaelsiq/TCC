import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdDisplay from "../../pages/adDisplay/adDisplay";
import Home from "../../pages/home/home";
import Login from '../../pages/login/login';
import Menu from "../../pages/menu/menu";
import routers from './routers.json';
import { Navigate } from 'react-router-dom';
import Ad from "../../pages/ad/ad";
import { SponsorReport } from "../../pages/sponsorReport/SponsorReport";
import { StreamerReport } from "../../pages/streamerReport/StreamerReport";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routers.initial} element={<Home />} />
                <Route path={routers.login} element={<Login />} />
                <Route path='/ad/display/embed/:id' element={<AdDisplay token={window.location.pathname}/>}/>
                <Route path='/Menu' element={localStorage.getItem('userId') ? <Menu/> : <Navigate to="/" /> }/>
                <Route path='/ads' element={localStorage.getItem('userId') && localStorage.getItem('type') === 'Sponsors' ? <Ad/> : <Navigate to="/" /> }/> 
                <Route path='/ads/id' element={ <AdDisplay/> }/> 
                <Route path='/Reports' element={ localStorage.getItem('type') ==='Sponsors' ? <SponsorReport/>: <StreamerReport/>} />
            </Routes>
        </BrowserRouter>
    ) 
}
export default Router;
