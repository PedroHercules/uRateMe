const express = require('express');
const Serie = require('../database/Serie.js');
const axios = require('axios');
const router = express.Router();
const User = require('../database/User.js');

const Rate = require('../database/Rate.js');

async function getSeries() {
    const api_key = 'b0b8e4ce54b50e319832fe88b0fbc4d3';
    const base_url = 'https://api.themoviedb.org/3/';
    const api_url = base_url + 'discover/tv?api_key=' + api_key + '&sort_by=popularity.desc&language=pt-BR';
    
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
        const series = await getSeries();
        series.forEach(async serie => {
            const { id, name, overview, vote_average, first_air_date, poster_path, number_of_seasons} = serie;
            const data = await Serie.create({
                id: id,
                title: name,
                sinopse: overview,
                date: first_air_date,
                rateApi: vote_average,
                photo: poster + poster_path,
                nSeasons: number_of_seasons
            });
        });

        return res.send('Series adicionados com sucesso!');
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
            return res.send({serie, rates});
        }
    });

})

module.exports = app => app.use('/series', router);