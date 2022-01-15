import React, {useContext, useEffect, useState} from 'react';
import api from '../../api';
import history from '../../history';

import './styles.css';

import seta from '../../assets/images/seta_direita.png';
import {Context} from '../../Context/authContext';


export default function Rates() {

    const {user} = useContext(Context);
    const [rates, setRates] = useState([]);

    function handleDetail(id, type){
        history.push({
            pathname: '/details',
            state: {
                id: id,
                isMovie: type === 'filme' ? true : false
            }
        });
    }

    useEffect(() => {
        api.get(`user/profile/${user.id}`).then(response => {
            console.log(response.data.rates);
            setRates(response.data.rates);
        })
        
    }, []);

    console.log(rates);

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
                    {rates.map(rate => (
                        <div className="rates-list-rate" onClick={() => handleDetail(rate.contentId, rate.contentType)}>
                            <p>{rate.date}</p>
                            <p>{rate.contentName}</p>
                            <p>{rate.score}</p>
                            <p>{rate.comment}</p>
                            <img src={seta}  width="20" height="20"/>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}