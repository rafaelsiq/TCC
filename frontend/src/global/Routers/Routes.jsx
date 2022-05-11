import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../../pages/home/home";
import Login from '../../pages/login/login';
import routers from './routers.json'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routers.initial} element={<Home />} />
                <Route path={routers.login} element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
