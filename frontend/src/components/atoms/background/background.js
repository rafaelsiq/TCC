import backImage from '../../../constants/files/geral-background.png'
import './background.css'
import React from 'react';



function Background({ Header, Content, Footer }) {
  return (
    <div id='background'
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        width: '100%',
        height: '100%',

      }}>
      <Header />
      <Content />
      <Footer />
    </div>)
}
export default Background;