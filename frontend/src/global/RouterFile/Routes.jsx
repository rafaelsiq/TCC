import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../../pages/home/home";
import About from '../../pages/about/about';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }  />
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>    
    )
}
export default Router;
