import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './pages/register';
import Profile from './pages/profile';
import Home from './pages/home';
import Login from './pages/login';

export default function routes() {
    return(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/cadastro' component={Register}/>
        <Route path='/profile' component={Profile}/> 
        <Route path='/login' component={Login}/>
    </Switch>
    </BrowserRouter>
    );}