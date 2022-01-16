import React, {useEffect, useState, useContext} from 'react';
import api from '../../api';

import './styles.css';

import PageHeader from '../../components/PageHeader/pageHeader';
import Card from '../../components/CardMoviesSeries/cardMoviesSeries';
import Footer from '../../components/Footer/footer';

import { Context } from "../../Context/authContext";
import history from '../../history';

export default function Filmes() {

    const [movies, setMovies] = useState([]);
    const {user} = useContext(Context);

    useEffect(() => {
        api.get('/movies/show').then(response => {
            setMovies(response.data.movies);
        })
    }, []);

    function handleAdd(){
        history.push({
            pathname: '/cadastrar',
            state: {
                isMovie: true
            }
        });
    }

    return (
        <div className="filmes-container">
            <PageHeader SearchIsVisible={true}/>
            <main className="filmes-main" >
                <div id="filmes-main-top">
                    <h3>Filmes</h3>
                    <span id='line'></span>
                    {user.isAdmin === true ? <a onClick={handleAdd} >Adicionar Filmes</a> : null}
                    
                </div>
                <section>
                    {movies.map((movie, index) => (
                        <div key={index} className='filmes-filme'>
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
            </main>
            <Footer />
        </div>
    );
}