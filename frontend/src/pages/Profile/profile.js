import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Profile(){
    return (
        <div className="profile-container">
            <div className="nav-bar-profile">
                <Link to="Rates">Avaliações</Link>
            </div>
        </div>
    );
}