import React from 'react';

import './styles.css';

export default function CardMoviesSeries({ title, photo, type}) {
    return (
        <div className="card" style={{'background': `url(${photo})`, 'background-size': '260px 320px'}} >
            <div className="card-body">
                <h3>{title}</h3>
                <h4>{type}</h4>
            </div>
        </div>
    );
}