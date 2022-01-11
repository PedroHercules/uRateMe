import React, {useEffect, useState} from "react";
import api from "../../api";

import './styles.css';

import PageHeader from "../../components/PageHeader/pageHeader";
import SlideShow from "../../components/SlideShow/slideShow";
import Card from '../../components/CardMoviesSeries/cardMoviesSeries';
import Footer from '../../components/Footer/footer';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    console.log(series);

    useEffect(() => {
        api.get('/movies/show').then(response => {
            setMovies(response.data.movies);
        });

        api.get('/series/show').then(response => {
            setSeries(response.data.series);
        })
    }, []);

    return (
        <div className="home-body">
            <PageHeader />
            <SlideShow />
            <main className="home-main">
                <div id="home-main-top">
                    <h3>Top Filmes</h3>
                    <span id='span-sep'></span>
                    <a href="/filmes">Mostrar tudo</a>
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

                <div id="home-main-top">
                    <h3>Top Séries</h3>
                    <span id='span-sep'></span>
                    <a href="/series">Mostrar tudo</a>
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