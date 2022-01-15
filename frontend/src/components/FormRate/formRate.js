import React, {useState, useEffect, useContext} from 'react';
import api from '../../api';

import './styles.css';
import history from '../../history';

import { Context } from '../../Context/authContext';

export default function FormRate({ rateId, contentId, userId, nickname, upScore, upComment, isUpdate, setIsUpdated, tipo, name }) {

    const [score, setScore] = useState(1);
    const [comment, setComment] = useState('');
    const {user} = useContext(Context);

    async function rate(e) {
        console.log(userId);
        e.preventDefault();
        
        await api.post(`rate/send/${contentId}`, {
            "score": score,
            "comment": comment,
            "contentId": contentId,
            "user": user.id,
            "tipo": tipo,
            "name": name
        }).then(response => {
            console.log(response);
            history.go(0);
        }).catch(err => {
            console.log(err);
        })
        
    }

    async function updateRate(e) {
        e.preventDefault();

        console.log(rateId);
        
        await api.post(`rate/update/${rateId}`, {
            "score": score,
            "comment": comment,
        }).then(response => {
            console.log(response);
            history.go(0);
        })
    }

    function cancel() {
        setIsUpdated(false)
    }

    useEffect(() => {
        setScore(upScore);
        setComment(upComment);
    }, [])

    return (
        <div className="comment">
            <div className="comment-left">
                <p>{nickname[0].toUpperCase()}</p>
            </div>
            <form >
                <div>
                    <input 
                        className="input-range" 
                        name='inputrange' 
                        type="range" 
                        min="1" 
                        max="10" 
                        step="1" 
                        onChange={(e) =>{setScore(e.target.value)}} 
                        onLoad={(e) =>{setScore(e.target.value)}}
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
                        onChange={(e) =>{setComment(e.target.value)}} 
                        onLoad={(e) =>{setComment(e.target.value)}}
                        value={comment}
                        required
                    />
                    <span>{comment.length} / 300 </span>
                    {isUpdate === false ? (
                        <button className="" onClick={rate}>Enviar</button>
                    ): (
                        <div>
                            <button className="" onClick={updateRate}>Enviar</button>
                            <button className="" onClick={cancel}>Cancelar</button>
                        </div>
                    )}
                    
                </div>
            </form>
        </div>
    );
}