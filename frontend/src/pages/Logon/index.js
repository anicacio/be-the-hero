import React from 'react';
import './styles.css';
import heroesImage from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon({children}) {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>
                    <a href="/register">Não tenho cadastro</a>
                </form>

            </section>

            <img src={heroesImage} alt="Heroes"/>
        </div>
    );
};
