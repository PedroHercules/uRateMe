const express = require('express');
const Serie = require('../database/Serie.js');
const axios = require('axios');
const router = express.Router();
const User = require('../database/User.js');
const adminAuth = require('../middlewares/admin');
const {Op} = require('sequelize');

const Rate = require('../database/Rate.js');

async function getSerie(id_serie) {
    const api_key = 'b0b8e4ce54b50e319832fe88b0fbc4d3';
    const base_url = 'https://api.themoviedb.org/3/';
    const api_url = base_url + `tv/${id_serie}?api_key=${api_key}&language=pt-BR`;;
    
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
        const serie = await getSerie(req.body.id);
        const { id, name, overview, genres, vote_average, first_air_date, poster_path, backdrop_path, number_of_seasons} = serie;
        const genre = genres[0].name + "/" + genres[1].name;
        await Serie.findOne({where: {id: id}})
            .then(async check_serie => {
                if (check_serie == undefined){
                    const data = await Serie.create({
                        id: id,
                        title: name,
                        sinopse: overview,
                        genre: genre,
                        date: first_air_date,
                        rateApi: vote_average,
                        photo: poster + poster_path,
                        backdrop_path: poster + backdrop_path,
                        nSeasons: number_of_seasons
                    });
                    res.send({mensage: 'Cadastrado com sucesso!'})
                }else{
                    console.log('Ja existe');
                    res.status(400).send({error: "Serie ja existe"});
                }
            })
    }catch(err){
        return res.send({error: err})
    }
    
});

router.get('/show', async (req, res) => {
    try {
        const series = await Serie.findAll();
        return res.send({series});
    } catch (error) {
        return res.send({error: error});
    }
});


router.get('/show/:id', async (req, res) => {
    const id = req.params.id;
   
    await Serie.findByPk(id).then(async serie => {
        if(serie != undefined) {
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
                serie.nComments += 1;
            });
            return res.send({serie, rates});
        }
    });

});

router.post('/search', async (req, res) => {
    try {
        const query = req.body.search;
        const serie = await Serie.findAll({
            where: {
                title: {
                    [Op.like]: "%" + query + "%"
                }
            }
        });

        return res.send({serie});
    } catch (error) {
        return res.status(400).send({error: error});
    }
});

module.exports = app => app.use('/series', router);