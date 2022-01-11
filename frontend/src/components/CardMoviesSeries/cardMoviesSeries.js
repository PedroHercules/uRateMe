import React from 'react';

import history from '../../history';

import './styles.css';

export default function CardMoviesSeries({ id, title, photo, backdrop_path, sinopse, date, rateUsers, nComments, isMovie ,type}) {
    console.log(backdrop_path)
    function handleDetail(){
        history.push({
            pathname: '/details',
            state: {
                id: id,
                title: title,
                photo: photo,
                backdrop_path: backdrop_path,
                sinopse: sinopse, 
                date: date, 
                rateUsers: rateUsers, 
                nComments: nComments,
                isMovie: isMovie,
                type: type,
            }
        });
    }

    return (
        <div className="card" onClick={handleDetail} style={{'background': `url(${photo})`, 'backgroundSize': '260px 320px'}} >
            <div className="card-body">
                <h3>{title}</h3>
                <h4>{type}</h4>
            </div>
        </div>
    );
}