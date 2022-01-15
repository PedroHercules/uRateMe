import React from 'react';

import './styles.css';

import seta from '../../assets/images/seta_direita.png';

export default function Rates() {
    return (
        <div className="rates-container">
            <h3>Suas avaliações</h3>
            <span></span>

            <div className="rates-list">
                <div className="rates-list-header">
                    <p>Data</p>
                    <p>Filme/Séries</p>
                    <p>Nota</p>
                    <p>Comentário</p>
                    <img src={seta}  width="20" height="20"/>
                </div>

                <div className="rates-list-body">
                    <div className="rates-list-rate">
                        <p>Jan 15 2022</p>
                        <p>Homem aranha</p>
                        <p>10</p>
                        <p>Muito Bom</p>
                        <img src={seta}  width="20" height="20"/>
                    </div>
                    <div className="rates-list-rate">
                        <p>Jan 15 2022</p>
                        <p>Titanic</p>
                        <p>10</p>
                        <p>Muito Bom</p>
                        <img src={seta}  width="20" height="20"/>
                    </div>
                    <div className="rates-list-rate">
                        <p>Jan 15 2022</p>
                        <p>Vingadores</p>
                        <p>10</p>
                        <p>Muito Bom</p>
                        <img src={seta}  width="20" height="20"/>
                    </div>
                </div>
            </div>
        </div>
    );
}