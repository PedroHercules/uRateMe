import React from 'react';
import { Link } from 'react-router-dom';

import imgUer from '../../assets/images/account_circle.png';
import imgReview from '../../assets/images/rate_review.png';
import setaDireita from '../../assets/images/seta_direita.png';

import './styles.css';

export default function NavBarProfile({select}) {
    return (
        <div className="nav-container">
            <Link to="updateProfile" style={{backgroundColor: select === 1 ? '#EAEAEA' : '#FFFFFF'}}>
                <img src={imgUer} width="34" height="34" alt="user icon"/>
                Perfil
                <img src={setaDireita} width="30" height="30"/>
            </Link>
            <Link to="Rates" style={{backgroundColor: select === 2 ? '#EAEAEA' : '#FFFFFF'}}>
                <img src={imgReview} width="34" height="34" alt="user icon"/>
                Avaliações
                <img src={setaDireita} width="30" height="30"/>
            </Link>
        </div>
    );
}