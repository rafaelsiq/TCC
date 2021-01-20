import React from 'react'
import './styles.css'
import heroesImg from '../../assets/streamers.png'
import logoImg from '../../assets/logo.png'
import { FiLogIn } from 'react-icons/fi'
import {Link} from 'react-router-dom';


export default function Login() {
    return(
        <div className="login-conteiner">
            <section className="form">
            <img src={logoImg}alt="TCC"/>
            <form>
                <h1>Faça Seu Login</h1>
                <input placeholder="Sua ID"/>
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/cadastro">
                    <FiLogIn size={16} color="E02041"/>
                    Nao tenho cadastro
                    </Link>

            </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    ); 
}