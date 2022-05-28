import './initial-content.css';
import React from 'react';
import video1 from '../../../constants/files/slobs-daymode-2.mp4'
import pic1 from '../../../constants/files/initial1.jpg'
import pic2 from '../../../constants/files/initial2.jpg'
import pic3 from '../../../constants/files/initial3.jpg'
import { useEffect } from 'react';
import { Divider } from '@mui/material';

function InitialContent() {
    useEffect(()=>{
        document.getElementById('background').style = {
            backgroundColor: 'transparent'
          }
    })
    return (
        <div style={{
            margin: '8%',
            width: '80%',
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '20px',
            color: '#4f5e65',

        }} id="initialContent">
             <div style={{
                display: 'flex',
                marginBottom: '80px',
                marginTop: '80px', 
                justifyContent: 'space-between'


            }}>
                <div>
                <h2 style={{
                    color:'black',
                     marginLeft:'80px',
                    marginRight:'80px'
                }}>Como iniciar?</h2>
                <h2 style={{  marginLeft:'80px',
                    marginRight:'80px'}}>Cadastre sua primeira propaganda!</h2>
                </div>
                <img style={{  width: '500px', borderRadius: '17px'}} src={pic2} alt="suamarca" />
            </div>
            <Divider></Divider>
            <div style={{
                display: 'flex',
                marginBottom: '80px',
                marginTop: '80px',
                justifyContent: 'space-between'

            }}>
                <img style={{  width: '500px', borderRadius: '17px'}} src={pic1} alt="suamarca" />
                <div>
                <h2 style={{
                    color:'black',  marginLeft:'80px',
                    marginRight:'80px'
                }}>Como Divulgar?</h2>
                <h2 style={{  marginLeft:'80px',
                    marginRight:'80px'}}>Divulgue sua marca e ajude pequenos streamers a alcançar seus objetivos financeiros!</h2>
            </div>
            </div>
            <Divider></Divider>
            <div style={{
                display: 'flex',
                marginBottom: '80px',
                marginTop: '80px',
                justifyContent: 'space-between',
                borderRadius:'17px'
            
            }}>
                 <div>
                <h2 style={{
                    color:'black', marginLeft:'80px',
                    marginRight:'80px'
                }}>Como monetizar minha Live?</h2>
                <h2 style={{  marginLeft:'80px',
                    marginRight:'80px'}}>Monetize suas lives enquanto joga com seus amigos, sem fornecer anuncios que interferem na qualidade de suas transmissões!</h2>
                </div><video
                    style={{
                        borderRadius:'17px'
                    }}
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
            <Divider></Divider>
            <div style={{
                display: 'flex',
                marginBottom: '80px',
                marginTop: '80px', 
                justifyContent: 'space-between'


            }}>
                <img  style={{  width: '500px', borderRadius: '17px'}} src={pic3} alt="suamarca" />
                <div>
                <h2 style={{
                    color:'black', marginLeft:'80px',
                    marginRight:'80px'
                }}>É dificil?</h2>
                <h2 style={{  marginLeft:'80px',
                    marginRight:'80px'}}>Incorpore um conteudo simple em suas lives e ganhe com isto!</h2>
                </div>
            </div>
        </div>
    )
}
export default InitialContent;