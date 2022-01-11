import React, {useEffect, useState} from 'react';
import api from '../../api';

import './styles.css';

import PageHeader from '../../components/PageHeader/pageHeader';
import Card from '../../components/CardMoviesSeries/cardMoviesSeries';
import Footer from '../../components/Footer/footer';

export default function Filmes() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get('/movies/show').then(response => {
            setMovies(response.data.movies);
        })
    }, []);

    return (
        <div className="filmes-container">
            <PageHeader />
            <main className="filmes-main">
                <div id="filmes-main-top">
                    <h3>Filmes</h3>
                    <span id='line'></span>
                    <a href="/">Adicionar Filmes</a>
                </div>
                <section>
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <Card  
                                id={movie.id} 
                                title={movie.title} 
                                photo={movie.photo} 
                                backdrop_path={movie.backdrop_path}
                                sinopse={movie.sinopse} 
                                date={movie.date} 
                                rateUsers={movie.rateUsers} 
                                rateApi={movie.rateApi}
                                nComments={movie.nComments} 
                                isMovie={true} 
                                type="Ação/Ficção"/>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}