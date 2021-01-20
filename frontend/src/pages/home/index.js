import React from 'react'
import './styles.css'
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import LeftImg from '../../assets/left-img.png'
import RightImg from '../../assets/right-img.png'

export default function Home() {
    return (
        <div className="home-container">
            <header>
                <div>
                    <img src={logoImg} alt="Be the hero" />
                </div>
                <div>
                    <Link className="button" to="/cadastro">Cadastre-se</Link>
                    <Link className="button" to="/login">Log In</Link>
                    <Link className="button" to="/incidents/new">Anuncie</Link>
                </div>
            </header>
            <div className="content">
                <section className="left">
                    <h1>Ganhe por suas transmissões</h1>
                    <img src={LeftImg} alt="left"/>
                </section>

                <section id="rightimage" className="right">
                    <h1>Divulgue sua marca!</h1>
                    <img src={RightImg} alt="right"/>
                </section>
            </div>
        </div>

        
    );
}