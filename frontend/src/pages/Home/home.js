import React, {useContext, useEffect, useState} from "react";
import api from "../../api";

import { Context } from "../../Context/authContext";

import PageHeader from "../../components/PageHeader/pageHeader";

export default function Home() {
    const { authenticated, handleLogout, user } = useContext(Context)
    const [image, setImage] = useState('');

    console.log(authenticated, user);

    useEffect(() => {
        api.get('/movies/show').then(response => {
            setImage(response.data.movies[0].photo);
        })
    }, []);

    return (
        <div>
            <PageHeader/>
            <button onClick={handleLogout}>Sair</button>
            <img src={image}></img>
        </div>
    );
}