import React from 'react';
import { Link } from 'react-router-dom';

export default function Rates() {
    return (
        <div>
            <Link to="Rates">Avaliações</Link>
            <Link to="updateProfile">Perfil</Link>
        </div>
    );
}