import React, {useContext, useEffect, useState} from "react";
import api from "../../api";

import { Context } from "../../Context/authContext";

import './styles.css';

import PageHeader from "../../components/PageHeader/pageHeader";
import SlideShow from "../../components/SlideShow/slideShow";
import Card from '../../components/CardMoviesSeries/cardMoviesSeries';

import Face from '../../assets/images/Facebook.png';
import Insta from '../../assets/images/Instagram.png';
import Twitter from '../../assets/images/Twitter.png';
import LinkedIn from '../../assets/images/LinkedIn.png';

export default function Home() {
    const { authenticated, user } = useContext(Context)
    const [movies, setMovies] = useState([]);

    console.log(authenticated, user);

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
                    <a>Mostrar tudo</a>
                </div>
                <section>
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <Card  title={movie.title} photo={movie.photo} type="Ação/Ficção"/>
                        </div>
                    ))}
                </section>
            </main>
            <footer className="home-footer">
                <img src={Face} width="52" height="52"/>
                <img src={Insta} width="52" height="52"/>
                <img src={Twitter} width="52" height="52"/>
                <img src={LinkedIn} width="52" height="52"/>
            </footer>
        </div>
    );
}