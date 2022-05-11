import Button from '../../atoms/button/button';
import './home-header.css';
import routers from '../../../global/Routers/routers.json'
import React from 'react';
import homePage from '../../../constants/homePage.json'
import { useContext } from "react";
import UserContext from "../../../contexts/user";

function HomeHeader() {
  const state = useContext(UserContext).state

  return (
    <div className="home-header">
      <div id='left'>
        <Button
          label='Home'
          type='header'
          style={{
            fontSize: "20px"
          }}
          to={routers.home}
        ></Button>
      </div>
      <div id='right'>
        <Button
          label='Downloads'
          type='header'
          style={{
            fontSize: "20px"
          }}
          to={routers.download}
        ></Button>
        <Button
          label='Reports'
          type='header'
          style={{
            fontSize: "20px"
          }}
          to={routers.reports}
        ></Button>
        <Button
          label='Menu'
          type='header'
          style={{
            fontSize: "20px"
          }}
          to={routers.menu}
        ></Button>
        <Button
          label={!state.id ? homePage.login : homePage.logout}
          type='header'
          style={{
            fontSize: "20px"
          }}
          to={!state.id ? routers.login : routers.logout} 
        ></Button>
      </div>
    </div>
  );
}

export default HomeHeader;
