import React from 'react';
import './styles.css';
import LogoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FiPower, FiMenu, FiSkipBack, FiSkipForward } from 'react-icons/fi';
import ultimasImg from '../../assets/ultimaslives.png'
import plataformaImg from '../../assets/plataforma1.png'
export default function Profile() {
    return (

        <div className="profile-container">
            <header>
                <Link type="button">
                    <FiMenu size={18} color="#E02041" />
                </Link>
                <img src={LogoImg} alt="Be the hero" />
                <Link type="button">
                    <FiPower size={18} color="#E02041" />
                </Link>
            </header>
            <div className="history">
                <h1>Ultimas Lives</h1>
                <div className="carousel">
                    <button type="button">
                        <FiSkipBack size={18} color="#E02041" />
                    </button>
                    <div className="images">
                        <img src={ultimasImg} alt="" />
                        <img src={ultimasImg} alt="" className="middleimg" />
                        <img src={ultimasImg} alt="" />
                    </div>
                    <button type="button">
                        <FiSkipForward size={18} color="#E02041" />
                    </button>
                </div>
                <h1>Ultimas plataformas</h1>
                <div className="carousel">
                    <button type="button">
                        <FiSkipBack size={18} color="#E02041" />
                    </button>
                    <div className="images">
                        <img src={plataformaImg} alt="" />
                        <h1>12:03:54</h1>
                        <img src={plataformaImg} alt="" className="middleimg" />
                        <h1>12:03:54</h1>
                        <img src={plataformaImg} alt="" />
                        <h1>12:03:54</h1>
                    </div>
                    <button type="button">
                        <FiSkipForward size={18} color="#E02041" />
                    </button>
                </div>

            </div>
            <div className="configuration">
                
            </div>
        </div>
    );
}