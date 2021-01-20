import React from 'react'
import './styles.css'
import logoImg from '../../assets/logo.png'
import {Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ganhe por suas lives.</p>
                    <Link className="back-link" to="/login">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Já possuo cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome completo"/>
                    <input type="email" placeholder="E-mail"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style   ={{
                            width:80
                        }}/>
                    </div>
                    <input placeholder="Senha"/>
                    <input placeholder="Confirmação de senha"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    ); 
}