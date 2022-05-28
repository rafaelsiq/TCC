import backImage from '../../../constants/files/geral-background.png';
import './background.css'
import React from 'react';
import EmptyContent from '../../organisms/emptyContent/emptyContent';


function Background({Content}) {
  if(!Content)
    Content = EmptyContent
    
  return (
    <div id='background'
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        width: '100%',
        height: '100%',

      }}>
      <Content />
    </div>)
}
export default Background;