import './App.css';
import Router from './global/Routers/Routes';
import React from 'react';
import GlobalContext from './contexts/index'


function App() {
  return (

    <GlobalContext>
      <Router className="App" />
    </GlobalContext>

  );
}

export default App;
