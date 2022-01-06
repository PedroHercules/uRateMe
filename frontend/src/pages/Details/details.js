import React, {useContext, useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import api from '../../api';

import './styles.css';

import { Context } from '../../Context/authContext'

import PageHeader from '../../components/PageHeader/pageHeader';
import e from 'cors';

export default function Details(props) {
    const {user} = useContext(Context);

    const [score, setScore] = useState(1);
    const [comment, setComment] = useState('');
    const [rates, setRates] = useState([]);
    console.log(rates[0])

    const {register, handleSubmit, setError, clearErrors, formState: {errors} } = useForm();

    async function rate(data,e) {
        e.preventDefault();

        await api.post(`rate/send/${props.location.state.id}`, {
            "score": data.inputrange,
            "comment": data.inputcomment,
            "contentId": props.location.state.id,
            "user": user.id
        }).then(response => {
            console.log(response);
        })
        
    }

    useEffect( async () => {
        await api.get(`movies/show/${props.location.state.id}`).then(response => {
            setRates(response.data.rates);
        })
    }, []);

    return (
        <div>
            <PageHeader />
            <main>
                <div className="img-fundo" style={{'background': `url(${props.location.state.photo})`, 'backgroundSize': '100% 100%'}}>
                    <div className="opa"></div>
                </div>
                <section className="details-info">
                    <img className="img-left" src={props.location.state.photo} alt="imagem do filme" />
                    <div className="section-right">
                        <h1>{props.location.state.title}</h1>
                        <span>{props.location.state.type}</span>
                        <h3>Descrição</h3>
                        <p>{props.location.state.sinopse}</p>
                    </div>
                </section>
                <div className='details-info-footer'>
                    <div className='details-score'>
                        <h4>Pontuação</h4>
                        <span>5.0</span>
                    </div>
                    <div className='details-info-footer-right'>
                        <h3>Genero: {props.location.state.type}</h3>
                        <h3>Data de Lançamento: {props.location.state.date}</h3>
                    </div>
                </div>
            </main>
            <div className="details-comments">
                <div className="comment">
                    <div className="comment-left">
                        <p>{user.nickname[0].toUpperCase()}</p>
                    </div>
                    <form onSubmit={handleSubmit(rate)}>
                        <div>
                            <input 
                                className="input-range" 
                                name='inputrange' 
                                type="range" 
                                min="1" 
                                max="10" 
                                step="1" 
                                {...register('inputrange')}
                                onChange={(e) =>{setScore(e.target.value)}} 
                                value={score} 
                            />
                            <label className="input-range-label">{score}</label>
                        </div>
                        <div className="textarea-button">
                            <textarea 
                                className="input-comment" 
                                name='inputcomment' 
                                type="text" 
                                placeholder="Adicionar um comentário público"
                                maxLength="300"
                                {...register('inputcomment')}
                                onChange={(e) =>{setComment(e.target.value)}} 
                                value={comment}
                            />
                            <span>{comment.length} / 300 </span>
                            <button className="" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                
                {rates.length === 0 
                    ? <h3>Não há comentários {rates[0]}</h3> 
                    : (
                        rates.map(rates => (
                            <section key={rates.id}> 
                                <div className="comment-left">
                                    <p>{rates.user.nickname[0]}</p>
                                </div>
                                <div className="comment-public">
                                    <div className="comment-public-header">
                                        <h4>{rates.user.nickname}</h4>
                                        <span>Nota: {rates.score}</span>
                                        <h5>{rates.date}</h5>
                                    </div>
                                    <div className="comment-public-body">
                                        <p>{rates.comment}</p>
                                    </div>
                                </div>
                            </section>
                        ))
                )}
                
            </div>
        </div>
    );
}