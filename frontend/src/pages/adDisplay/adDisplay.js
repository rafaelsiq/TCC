
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FindAdToDisplay } from '../../requesters/services/services';

function AdDisplay({ token }) {
  const [switcher, setSwitcher] = useState('start') // pode ser start, display, empty
  const timer = {
    start: 20000,
    empty: 10000,
    display: 30000,
  } 
  const userId = token.toString().replace('/ad/display/embed/', '')
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const [adDisplayed, setadDisplayed] = useState('a');

  useEffect(() => {
    document.getElementById('background').style = {
      backgroundColor: 'transparent'
    }

    sleep(timer[switcher]).then(() => {
      if (switcher === 'start') {
        setSwitcher('display')
      }
      else if(switcher === 'display'){
        FindAdToDisplay(userId).then((response) => {
          console.log(response)
          setadDisplayed(response.data.ad);
        })
        setSwitcher('empty')
      }
      else{
        setSwitcher('display')
      }
    })

  })

  return (
    <div style={{ display: 'grid', width: '100%', height: '100%', color: 'white' }}>
      {switcher === 'display' && <>
        <img style={{ width: '100%' }} src={adDisplayed.fileURL} alt={adDisplayed.title}></img>
        <p style={{ fontSize: '30px' }}>{adDisplayed.text}</p>
      </>}
      {switcher === 'start' && <div style={{ width: '100%', height: '100%', border: '1px solid white', paddingTop: '29%', display: "absolute", textAlign: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '40px' }}>Sua Ad será Carregada em breve</p>
      </div>}
      {switcher === 'empty' && <div style={{ width: '100%', height: '100%' }}>
        <p ></p>
      </div>}
    </div>
  );
}

export default AdDisplay;
