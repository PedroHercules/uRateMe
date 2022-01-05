import React, {useContext} from 'react';

import { Context } from "../../Context/authContext";

import './styles.css';

import Logo from '../../assets/images/logo.png';
import Seta from '../../assets/images/seta_baixo.png';

export default function PageHeader(){
    const { handleLogout, user } = useContext(Context);

    return (
        <header className="page-header">
            <div className="bar-left">
                <img src={Logo}></img>
            </div>
            <div className="bar-right">
                <a>Home</a>
                <a>Filmes</a>
                <a>Séries</a>
                <a>Sobre</a>
                <a>Ajuda</a>
                <div className="bar-search">
                    <input type="search" placeholder="Procurar"></input>
                </div>
                <div className="bar-icon-user">
                    <div>
                        <p>{user.nickname[0].toUpperCase()}</p>
                    </div>
                    <div>
                        <img src={Seta} id="header-icone"/>
                    </div>
                </div>
            </div>
            <button onClick={handleLogout}>Sair</button>
        </header>
    );
}