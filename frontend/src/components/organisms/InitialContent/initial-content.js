import './initial-content.css';
import React from 'react';
import video1 from '../../../constants/files/slobs-daymode-2.mp4'
import pic1 from '../../../constants/files/initial1.jpg'
import pic2 from '../../../constants/files/initial2.jpg'
import pic3 from '../../../constants/files/initial3.jpg'

function InitialContent() {
    
    return (
        <div style={{
            display:'grid',
        }} id="initialContent">
            <div style={{
                display:'flex',
                marginBottom:'20px',
                marginTop:'20px'
            }}>
                <h2>Monetize suas lives enquanto joga com seus amigos, sem fornecer anuncios que interferem na qualidade de suas transmissões!</h2>
                <video
                    data-v-71a54642=""
                    data-v-5473e3c0=""
                    autoplay="autoplay"
                    muted="muted"
                    playsinline=""
                    loop="loop"
                    class="landing-section__image--slobs">
                    <source data-v-71a54642="" data-v-5473e3c0="" src={video1} />
                </video>
            </div>
            <div style={{
                display:'flex',
                marginBottom:'20px',
                marginTop:'20px'
            }}>
                <img src={pic1} alt="suamarca"/>
                <h2>Divulgue sua marca e ajude pequenos streamers a alcançar seus objetivos financeiros!</h2>
            </div>
            <div style={{
                display:'flex',
                marginBottom:'20px',
                marginTop:'20px'

            }}>
                <h2>Cadastre sua primeira propaganda!</h2>
                <img src={pic2} alt="suamarca"/>
            </div>
            <div style={{
                display:'flex',
                marginBottom:'20px',
                marginTop:'20px'

            }}>
            <img src={pic3} alt="suamarca"/>
                <h2>Incorpore um conteudo simple em suas lives e ganhe com isto!</h2>
            </div>
        </div>
    )
}
export default InitialContent;