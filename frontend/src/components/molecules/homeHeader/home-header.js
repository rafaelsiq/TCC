import './home-header.css';
import routers from '../../../global/Routers/routers.json'
import React, { useContext, useEffect } from 'react';
import UserContext from '../../../contexts/user';
import { Button } from '@mui/material';


function HomeHeader() {
  const state = useContext(UserContext).state
  const setState = useContext(UserContext).setState

  const handleLogOut = () => {
    setState({
      ...state,
      name: '',
      token: '',
      id: '',
      loginpage: false,
    })
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userId')

  }
  const HandleOnLoad = () => {
    useEffect(() => {
      if (localStorage.getItem('token') !== null && state.userLoggedOrNot !== 'logout') {
        setState({
          ...state,
          userLoggedOrNot: 'logout'
        })
      }
    })
  }


  return (
    <div className="home-header"
      onLoad={HandleOnLoad()}
      variant="outlined"
    >
      <div id='left'>
     { window.location.href !== 'http://localhost:3001/' && <Button
          children='Home'
          type='header'
          style={{
            fontSize: "16px"
          }}
          href={routers.initial}
        ></Button>}
      </div>
      <div id='right'>
       { localStorage.getItem('userId') && <Button
          children='Downloads'
          type='header'
          style={{
            fontSize: "16px"
          }}
          href={routers.download}
        ></Button>}
        { localStorage.getItem('userId') && <Button
          children='Reports'
          type='header'
          style={{
            fontSize: "16px"
          }}
          href={routers.reports}
        ></Button> }
        { localStorage.getItem('userId') && <Button
          children='Menu'
          type='header'
          style={{
            fontSize: "16px"
          }}
          href={routers.menu}
        ></Button> }

        {state.userLoggedOrNot === 'login' && <Button
          children={state.userLoggedOrNot}
          type='header'
          style={{
            fontSize: "16px"
          }}
          href={"/" + state.userLoggedOrNot}
        ></Button>
        }
        {state.userLoggedOrNot === 'logout' && <Button
          children={state.userLoggedOrNot}
          type='header'
          style={{
            fontSize: "16px"
          }}
          onClick={handleLogOut}
          href='/'
        ></Button>
        }

      </div>
    </div>
  );
}

export default HomeHeader;
