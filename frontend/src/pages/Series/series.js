import React, {useEffect, useState, useContext} from 'react';
import api from '../../api';

import './styles.css';

import PageHeader from '../../components/PageHeader/pageHeader';
import Card from '../../components/CardMoviesSeries/cardMoviesSeries';
import Footer from '../../components/Footer/footer';

import { Context } from "../../Context/authContext";
import history from '../../history';

export default function Series() {

    const [series, setSeries] = useState([]);
    const {user} = useContext(Context);

    useEffect(() => {
        api.get('/series/show').then(response => {
            setSeries(response.data.series);
        })
    }, []);

    function handleAdd(){
        history.push({
            pathname: '/cadastrar',
            state: {
                isMovie: false
            }
        });
    }

    function handleSearch(search){
        api.post('/series/search', {'search': search}).then(response => {
            setSeries(response.data.serie);
        });
    }

    return (
        <div className="series-container">
            <PageHeader SearchIsVisible={true} HandleSearch={handleSearch}/>
            <main className="series-main">
                <div id="series-main-top">
                    <h3>Séries</h3>
                    <span id='line'></span>
                    {user.isAdmin === true ? <a onClick={handleAdd} >Adicionar Séries</a> : null}
                </div>
                <section>
                    {series.map((movie, index) => (
                        <div key={index} className='series-serie'>
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
                                isMovie={false} 
                                type={movie.genre}/>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}