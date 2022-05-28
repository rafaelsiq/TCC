import homeStrings from '../../../constants/homePage.json'
import { Button } from '@mui/material';
import './home-content.css';
import React from 'react';

function HomeContent() {
    return (
        <div id="homecontent">
            <h1 id="top">{`${(localStorage.userName ? localStorage.userName + ", " : '')}` + homeStrings.topText}</h1>
            <h1 id="bottom">{homeStrings.bottomText}</h1>
            <div id="buttonAbout">
                <Button
                    style={{
                        'background': "linear-gradient(180deg, rgba(28, 106, 224, 0.539) 21.92%, rgba(162, 33, 223, 0.483) 129.03%), linear-gradient(0deg, rgba(62, 67, 205, 0.7), rgba(62, 67, 205, 0.7)), #FFFFFF",
                        'color': 'white'
                    }}
                    variant="outlined"
                    children={localStorage.getItem('type') === 'Streamers' ? 'Passo a Passo': 'Nova Propaganda'}
                    type='standard'
                    href={localStorage.getItem('type') === 'Streamers' ? '/download': '/ads'}
                ></Button>
            </div>
        </div>)

}
export default HomeContent;