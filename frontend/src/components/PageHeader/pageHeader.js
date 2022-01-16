import React, {useContext, useState} from 'react';
import history from '../../history';
import { Context } from "../../Context/authContext";

import './styles.css';

import Logo from '../../assets/images/logo.png';
import Seta from '../../assets/images/seta_baixo.png';
import logout from '../../assets/images/logout.png';
import profile from '../../assets/images/user.png'

export default function PageHeader({ SearchIsVisible }){
    const { handleLogout, user } = useContext(Context);

    const [dropDownMenu, setDropDownMenu] = useState(false);

    function handleShowDropDown() {
        setDropDownMenu(!dropDownMenu);
    }

    return (
        <header className="page-header">
            <div className="bar-left">
                <img src={Logo} alt="logo" ></img>
            </div>
            <div className="bar-right" style={{'width': SearchIsVisible === true ? '60vw' : '40vw'}}>
                <a href='/'>Home</a>
                <a href='/filmes'>Filmes</a>
                <a href='/series'>Séries</a>
                <a href='/sobre'>Sobre</a>
                <a href='/ajuda'>Ajuda</a>
                {SearchIsVisible === true ? (
                    <div className="bar-search">
                        <input type="search" placeholder="Procurar"></input>
                    </div>
                ) : null}
                <div className="bar-icon-user">
                    <div onClick={handleShowDropDown}>
                        <p>{user.nickname[0].toUpperCase()}</p>
                    </div>
                    <div onClick={handleShowDropDown}>
                        <img src={Seta} id="header-icone" alt="seta para baixo"/>
                    </div>
                </div>
            </div>
            <div className="dropDownMenu" style={{'display': dropDownMenu ? 'flex' : 'none'}}>
                <span>.</span>
                <div onClick={() => {history.push('/updateProfile')}}>
                    <img src={profile} width="19" height="19" alt='icone de perfil'/>
                    <a >Perfil</a>
                </div>
                <div onClick={handleLogout} >
                    <img src={logout} width="19" height="19" alt='icone de sair'/>
                    <a>Sair</a>
                </div>
            </div>
        </header>
    );
}