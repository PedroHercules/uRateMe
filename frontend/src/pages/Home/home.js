import React, {useEffect, useState} from "react";
import api from "../../api";

import './styles.css';

import PageHeader from "../../components/PageHeader/pageHeader";
import SlideShow from "../../components/SlideShow/slideShow";
import Card from '../../components/CardMoviesSeries/cardMoviesSeries';
import Footer from '../../components/Footer/footer';

export default function Home() {
    const [movies, setMovies] = useState([]);

    console.log(movies);

    useEffect(() => {
        api.get('/movies/show').then(response => {
            setMovies(response.data.movies);
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