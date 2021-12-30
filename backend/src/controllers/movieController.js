const express = require('express');
const Content = require('../database/Content.js');
const axios = require('axios');
const router = express.Router();


async function getMovies() {
    const api_key = 'b0b8e4ce54b50e319832fe88b0fbc4d3';
    const base_url = 'https://api.themoviedb.org/3/';
    const api_url = base_url + 'discover/movie?api_key=' + api_key + '&sort_by=popularity.desc&language=pt-BR';
    const data = await axios.get(api_url)
        .then(response => {
            return response.data.results;
        })
        .catch(err => {
            console.error(err);
        });
    
    return data;
}

router.post('/update', async (req, res) => {
    try{
        const poster = "https://image.tmdb.org/t/p/w500";
        const movies = await getMovies();
        movies.forEach(async movie => {
            const { title, overview, vote_average, release_date, poster_path } = movie;
            const data = await Content.create({
                title: title,
                sinopse: overview,
                date: release_date,
                rateApi: vote_average,
                photo: poster + poster_path
            });
        });

        return res.send('Filmes adicionados com sucesso!');
    }catch(err){
        return res.send({error: err})
    }
    
});

router.get('/show', async (req, res) => {
    try {
        const movies = await Content.findAll();
        return res.send({movies});
    } catch (error) {
        return res.send({error: error});
    }
});

module.exports = app => app.use('/movies', router);