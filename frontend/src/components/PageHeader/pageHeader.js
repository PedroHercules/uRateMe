import React from 'react';

import './styles.css';

export default function PageHeader(){
    return (
        <header className="page-header">
            <div className="bar-left">
                <h1>Logo</h1>
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
                    <p>M</p>
                    <span className="icon">^</span>
                </div>
            </div>
        </header>
    );
}