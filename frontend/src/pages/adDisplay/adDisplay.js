
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function AdDisplay({ windows }) {
  const image = 'https://raw.githubusercontent.com/rafaelsiq/TCC/main/frontend/src/constants/files/geral-background.png'

  const [dimensao, setDimensao] = useState('')

  useEffect(()=>{
    return setDimensao(window.screen);
  },[])

  return (
    <div style={{ width: '100%', color: 'white' }}>
      <img src={image} alt='adasda' />
      <p>{dimensao.toString()}</p>
    </div>
  );
}

export default AdDisplay;
