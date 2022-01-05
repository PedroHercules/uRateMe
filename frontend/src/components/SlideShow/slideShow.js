import React, {useEffect, useState} from "react";
import api from "../../api";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './styles.css';

export default function SlideShow() {
    const [image, setImage] = useState([]);
    //console.log(image.slice(0,3));

    useEffect(() => {
        api.get('/movies/show').then(response => {
            setImage(response.data.movies.slice(0,3));
        })
    }, []);

    return (
        <div className="slide-container">
            <Slide>
                {image.map((filmes,index) => (
                    <div className='slideBody' key={index}>
                        <img src={filmes.photo} />
                        <div>
                            <span id="slide-type">Ação/ficção</span>
                            <h1>{filmes.title}</h1>
                            <span id="slide-score">5.0</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
}