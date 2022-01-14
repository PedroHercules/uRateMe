const express = require('express');
const Movie = require('../database/Movie.js');
const Rate = require('../database/Rate.js');
const axios = require('axios');
const router = express.Router();
const User = require('../database/User.js');
const adminAuth = require('../middlewares/admin.js');


async function getMovie(id_movie) {
    const api_key = 'b0b8e4ce54b50e319832fe88b0fbc4d3';
    const base_url = 'https://api.themoviedb.org/3/';
    const api_url = base_url + `movie/${id_movie}?api_key=${api_key}&language=pt-BR`;
    const data = await axios.get(api_url)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.error(err);
        });
    
    return data;
}

router.post('/update', adminAuth, async (req, res) => {
    try{
        const poster = "https://image.tmdb.org/t/p/w500";
        const movie = await getMovie(req.body.id);
        const { id, title, overview, vote_average, release_date, poster_path, backdrop_path } = movie;
        await Movie.findOne({where: {id: id}})
            .then(async check_movie => {
                if(check_movie == undefined) {
                    const data = await Movie.create({
                        id: id,
                        title: title,
                        sinopse: overview,
                        date: release_date,
                        rateApi: vote_average,
                        photo: poster + poster_path,
                        backdrop_path: poster + backdrop_path
                    });
                    res.send({mensage: 'Cadastrado com sucesso!'})
                }else{
                    console.log('ja existe')
                    return res.status(400).send({error: "Filme já existe"});
                }
                
            })
    }catch(err){
        return res.status(400).send({error: "O registro do filme falhou"})
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