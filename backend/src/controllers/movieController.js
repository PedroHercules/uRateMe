const express = require('express');
const Movie = require('../database/Movie.js');
const Rate = require('../database/Rate.js');
const axios = require('axios');
const router = express.Router();
const User = require('../database/User.js');
const adminAuth = require('../middlewares/admin.js');
const {Op} = require('sequelize')


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

router.post('/update', async (req, res) => {
    try{
        const poster = "https://image.tmdb.org/t/p/w500";
        const movie = await getMovie(req.body.id);
        if(movie == undefined){
            return res.status(400).send({'error': 'Filme não encontrado na base de dados da API'})
        }
        const { id, title, overview, genres, vote_average, release_date, poster_path, backdrop_path } = movie;
        let genre = ""
        if (genres.length > 1) {
            genre = genres[0].name + "/" + genres[1].name;
        }else{
            genre = genres[0].name;
        }
        await Movie.findOne({where: {id: id}})
            .then(async check_movie => {
                if(check_movie == undefined) {
                    const data = await Movie.create({
                        id: id,
                        title: title,
                        sinopse: overview,
                        date: release_date,
                        genre: genre,
                        rateApi: vote_average,
                        photo: poster + poster_path,
                        backdrop_path: poster + backdrop_path
                    });
                    res.status(200).send({mensage: 'Cadastrado com sucesso!'})
                }else{
                    res.status(400).send({error: "Filme já existe"});
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


router.post('/search', async (req, res) => {
    try {
        const query = req.body.search;
        const movie = await Movie.findAll({
            where: {
                title: {
                    [Op.like]: "%" + query + "%"
                }
            }
        });

        if(movie == {}) {
            return res.status(400).send({"error": "filme não encontrado"})
        }

        res.status(200).send({movie});
    } catch (error) {
        return res.status(400).send({error: error});
    }
});


module.exports = app => app.use('/movies', router);