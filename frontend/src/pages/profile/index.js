import React from 'react';
import './styles.css';
import LogoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FiPower, FiMenu, FiSkipBack, FiSkipForward, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import ultimasImg from '../../assets/ultimaslives.png'
import plataformaImg from '../../assets/plataforma1.png'
export default function Profile() {
    return (

        <div className="profile-container">
            <header>
                <Link type="button" to="/logout">
                    <FiMenu size={18} color="#E02041" />
                </Link>
                <img src={LogoImg} alt="Be the hero" />
                <Link type="button">
                    <FiPower size={18} color="#E02041"  />
                </Link>
            </header>
            <body>
                <div className="history">
                    <h1>Ultimas Lives</h1>
                    <div className="carousel">
                        <div className="images">
                            <button type="button">
                                <FiSkipBack size={18} />
                            </button>
                            <img src={ultimasImg} alt="" />
                            <img src={ultimasImg} alt="" className="middleimg" />
                            <img src={ultimasImg} alt="" />
                            <button type="button">
                                <FiSkipForward size={18} />
                            </button>
                        </div>
                    </div>
                    <h1>Ultimas plataformas</h1>
                    <div className="carousel">
                        <div className="images">
                            <button type="button">
                                <FiSkipBack size={18} color="#E02041" />
                            </button>
                            <img src={plataformaImg} alt="" />
                            <img src={plataformaImg} alt="" className="middleimg" />
                            <img src={plataformaImg} alt="" />
                            <button type="button">
                                <FiSkipForward size={18} color="#E02041" />
                            </button>
                            <h1>12:10:10</h1>
                            <h1 className="middletxt">12:10:10</h1>
                            <h1>12:10:10</h1>

                        </div>

                    </div>
                </div>
                <div className="configuration">
                    <h1>Configurações Gerais</h1>
                    <div className="time-control">
                        <div className="headers">
                            <h1>Controle do Tempo</h1>
                            <FiToggleRight className="toggle" size={18} color="#E02041" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Tempo Maximo" />
                            <input type="text" placeholder="Tempo Minimo" />
                            <input type="text" placeholder="Tempo Total" />
                        </div>
                    </div>
                    <div className="type-control">
                        <div className="headers">
                            <h1>Controle do Tipo</h1>
                            <FiToggleRight className="toggle" size={18} color="#E02041" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Idade Maxima permitida" />
                            <input type="text" placeholder="Conteudo" />
                        </div>
                    </div>
                    <div className="sponsors-control">
                    <div className="headers">
                        <h1>Patrocinio Exclusivo</h1>
                        <FiToggleRight className="toggle" size={18} color="#E02041" />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Nome do patrocinador" />
                            <input type="text" placeholder="Ido do patrocinador" />
                            <input type="text" placeholder="Tipo" />
                        </div>
                    </div>
                    <div className="rodape">
                        <h1>Baixe aqui seu plugin pessoal para o OBS Studio</h1>
                        <Link className="button">Download</Link>
                    </div>
                </div>
            </body>
        </div >
    );
}