import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import api from '../../api';
import { Context } from "../../Context/authContext";

import './styles.css';

import PageHeader from '../../components/PageHeader/pageHeader';
import Footer from '../../components/Footer/footer';

import x from '../../assets/images/close_white.png';

export default function AddMoviesSeries() {
    const [keywords, setKeywords] = useState('');
    const [results, setResults] = useState([]);
    const [isShowing, setIsShowing] = useState(false);
    const [modalParam, setModalParam] = useState({});

    const {user} = useContext(Context);

    async function handleSearch() {
        await axios.get('https://api.themoviedb.org/3/search/movie?api_key=b0b8e4ce54b50e319832fe88b0fbc4d3&language=pt-BR&query='+keywords).then(response => {
            setResults(response.data.results);
        });
    }

    async function add(data) {
        await api.post(`movies/update/`, {
            id: data.id,
            userId: user.id
        });
    }

    function showModal(result){
        console.log(result);
        setModalParam(result);
        setIsShowing(!isShowing);
    }

    useEffect(() => {
        const listner = function (e ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            isShowing && showModal(modalParam);
          }
        }
    
        window.addEventListener('keyup', listner)
    
        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
      }, [isShowing, showModal])

    return (
        <div className="add-container">
            <PageHeader />

            <main className="add-main">
                <div className="add-main-header">
                    <input 
                        type="text" 
                        className="add-input" 
                        placeholder="Informe palavras chaves sobre o filme ou série para buscar na API"
                        onChange={(e) =>{setKeywords(e.target.value)}}
                    />
                    <button className="" onClick={handleSearch}>Procurar</button>
                </div>
                <div className="add-main-body">
                    {results.map((result, index) => (
                        <div key={result.id}>
                            <div className="add-card" onClick={() => showModal(result)} style={{'background': `url(https://image.tmdb.org/t/p/w500${result.poster_path})`, 'backgroundSize': '260px 320px'}} >
                                <div className="add-card-body">
                                    <h3>{result.title}</h3>
                                    <h4>Ação/Ficção</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
            {isShowing === true ? (
                <div className="add-modal-overlay">
                    <div className="add-modal-container" style={{'background': `url(https://image.tmdb.org/t/p/w500${modalParam.backdrop_path})`, 'backgroundSize': '100% 100%'}}>
                        <div id="opa"></div>
                        <div className="add-modal-header">
                            <h1>Deseja Realmente cadastrar esse Filme/Série no sistema?</h1>
                            <img src={x} width="16" height="16" onClick={showModal}/>
                        </div>
                        <div className="add-modal-body">
                            <img src={"https://image.tmdb.org/t/p/w500" + modalParam.poster_path} width='250' height='350'/>
                            <div className="add-modal-body-right">
                                <h1>{modalParam.title}</h1>
                                <h3>Descrição</h3>
                                <p>{modalParam.overview}</p>
                                <div className="add-modal-body-right-footer">
                                    <h4>Genero: Ação/Ficção</h4>
                                    <h4>Data de Lançamento: {modalParam.release_date}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="add-modal-footer">
                            <button onClick={showModal} id="btn-cancel">Cancelar</button>
                            <button onClick={() => add(modalParam)}>Adicionar</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}