import React, {useEffect, useState} from 'react';
import api from '../../api';

import './styles.css';

import PageHeader from '../../components/PageHeader/pageHeader';
import Card from '../../components/CardMoviesSeries/cardMoviesSeries';
import Footer from '../../components/Footer/footer';

export default function Series() {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        api.get('/series/show').then(response => {
            setSeries(response.data.series);
        })
    }, []);

    return (
        <div className="series-container">
            <PageHeader />
            <main className="series-main">
                <div id="series-main-top">
                    <h3>Séries</h3>
                    <span id='line'></span>
                    <a href="/">Adicionar Séries</a>
                </div>
                <section>
                    {series.map((movie, index) => (
                        <div key={index}>
                            <Card  
                                id={movie.id} 
                                title={movie.title} 
                                photo={movie.photo} 
                                backdrop_path={movie.backdrop_path}
                                sinopse={movie.sinopse} 
                                date={movie.date} 
                                rateUsers={movie.rateUsers} 
                                nComments={movie.nComments} 
                                type="Ação/Ficção"/>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}