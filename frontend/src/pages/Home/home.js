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
            <PageHeader SearchIsVisible={false} />
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
                                type={movie.genre}/>
                        </div>
                    ))}
                </section>

                <div id="home-main-top">
                    <h3>Top Séries</h3>
                    <span id='span-sep'></span>
                    <a href="/series">Mostrar tudo</a>
                </div>
                <section>
                    {series.map((serie, index) => (
                        <div key={index}>
                            <Card  
                                id={serie.id} 
                                title={serie.title} 
                                photo={serie.photo} 
                                backdrop_path={serie.backdrop_path}
                                sinopse={serie.sinopse} 
                                date={serie.date} 
                                rateUsers={serie.rateUsers} 
                                rateApi={serie.rateApi}
                                nComments={serie.nComments} 
                                isMovie={serie} 
                                type={serie.genre}/>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}