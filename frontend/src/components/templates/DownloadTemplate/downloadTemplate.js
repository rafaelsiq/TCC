
import React from "react";
import TitleDisplay from "../../atoms/titleDisplay/titleDisplay";
import HomeHeader from '../../molecules/homeHeader/home-header';
import 'react-nice-dates/build/style.css';
import print1 from '../../../constants/files/print1.png';
import print2 from '../../../constants/files/print2.png';
import print3 from '../../../constants/files/print3.png';
import print4 from '../../../constants/files/print4.png';
import { TextField, Typography } from "@mui/material";

function DownloadTemplate() {
    return (<div style={{
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '10px'
    }}>
        <HomeHeader />
        <div>
            <TitleDisplay background={true} title="Propagandas" />
            <div style={{width:'100%', justifyContent:'center'}}>
                <h2>Para incorporar nossas Propagandas em sua Live, siga os passos abaixo:</h2>
                <TextField  
                style={{width:'30%', marginTop:'10px', marginBottom:'10px'}}
                defaultValue={'http://localhost:3001/ad/display/embed/'+localStorage.getItem('userId')} 
                id="userLink" 
                variant="filled"
                ></TextField>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '11px' }}>
                <div style={{ display: 'grid' }}>
                    <h1>1º Passo</h1>
                    <img style={{ maxHeight: '300px' }} src={print1} alt='asd' />
                    <h4>Clique no sinal de mais em seu OBS Studio</h4>
                </div>
                <div style={{ display: 'grid' }}>
                    <h1>2º Passo</h1>
                    <img style={{ maxHeight: '300px' }} src={print2} alt='asd' />
                    <h4>Escolha a opção Navegador, ou Browser</h4>
                </div>
                <div style={{ display: 'grid' }}>
                    <h1>3º Passo</h1>
                    <img style={{ maxHeight: '300px' }} src={print3} alt='asd' />
                    <h4>Defina o nome da fonte para AdManager</h4>
                </div>
                <div style={{ display: 'grid' }}>
                    <h1>4º Passo</h1>
                    <img style={{ maxHeight: '300px' }} src={print4} alt='asd' />
                    <h4>Cole sua URL no campo URL</h4>
                </div>
            </div>
        </div>

    </div>
    );
}

export default DownloadTemplate;
