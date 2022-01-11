const express = require('express');
const Movie = require('../database/Movie.js');
const Rate = require('../database/Rate.js');
const axios = require('axios');
const router = express.Router();
const User = require('../database/User.js');


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
            const { id, title, overview, vote_average, release_date, poster_path, backdrop_path } = movie;
            const data = await Movie.create({
                id: id,
                title: title,
                sinopse: overview,
                date: release_date,
                rateApi: vote_average,
                photo: poster + poster_path,
                backdrop_path: poster + backdrop_path
            });
        });

        return res.send('Filmes adicionados com sucesso!');
    }catch(err){
        return res.send({error: err})
    }
    
});

router.get('/show', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        return res.send({movies});
    } catch (error) {
        return res.send({error: error});
    }
});

router.get('/show/:id', async (req, res) => {
    const id = req.params.id;
   
    await Movie.findByPk(id).then(async movie => {
        if(movie != undefined) {
            const rates = await Rate.findAll(
                {   
                    where: {contentId: id},
                    include: [
                        {
                            model: User, 
                            attributes: ["nickname"]
                        }
                    ]
                }
            );
            
            rates.forEach(function(){
                movie.nComments += 1;
            });

            return res.send({movie, rates});
        }
    });
})


module.exports = app => app.use('/movies', router);