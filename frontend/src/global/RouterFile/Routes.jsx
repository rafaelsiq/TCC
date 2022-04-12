import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../../pages/home/home";
import Initial from '../../pages/initial/initial';
import routers from '../Routes.json'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routers.home} element={<Home/>}  />
                <Route path={routers.initial} element={<Initial/>}/>
            </Routes>
        </BrowserRouter>    
    )
}
export default Router;
