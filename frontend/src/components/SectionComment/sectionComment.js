import React, {useState, useEffect} from 'react';
import api from '../../api';

import history from '../../history';

import './styles.css';
import Editar from '../../assets/images/editar.png';
import Lixeira from '../../assets/images/lixeira.png';
import x from '../../assets/images/close.png';

import FormRate from '../FormRate/formRate';

export default function SectionComment({ userId, contentId, ratesId, ratesUserNickname, score, date, comment, isMyrate}){
    const [isUpdated, setIsUpdated] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    function update(){
        setIsUpdated(true);
    }

    function removeRate(e) {
        e.preventDefault();
        console.log(ratesId);

        api.post('rate/delete', {
            "id": ratesId,
        }).then(response => {
            console.log(response.data);
            history.go(0);
        })
    }

    function showModal(){
        setIsShowing(!isShowing);
    }
    useEffect(() => {
        const listner = function (e ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            isShowing && showModal();
          }
        }
    
        window.addEventListener('keyup', listner)
    
        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
      }, [isShowing, showModal])

    return (
        <>
        {isMyrate === true ? (
            <div>
                {isUpdated === false ? (
                    <section> 
                        <div className="comment-left">
                            <p>{ratesUserNickname[0].toUpperCase()}</p>
                        </div>
                        <div className="comment-public">
                            <div className="comment-public-header" id="comment-myrate">
                                <div>
                                    <h4>{ratesUserNickname}</h4>
                                    <span>Nota: {score}</span>
                                    <h5>{date}</h5>
                                </div>
                                <span>
                                    <img 
                                        src={Editar} 
                                        alt="Editar" 
                                        width="20" 
                                        height="20"
                                        onClick={update}
                                    />
                                    <img 
                                        src={Lixeira} 
                                        alt="Lixeira" 
                                        width="20" 
                                        height="20"
                                        onClick={showModal}
                                    />
                                </span>    
                            </div>
                            <div className="comment-public-body">
                                <p>{comment}</p>
                            </div>
                        </div>
                    </section>
                ) : (
                    <FormRate 
                        rateId={ratesId}
                        contentId={contentId} 
                        userId={userId} 
                        nickname={ratesUserNickname}
                        upScore={score}
                        upComment={comment}
                        isUpdate={true}
                        setIsUpdated={setIsUpdated}
                    />  
                )}
            </div>
            
        ) : (
            <section key={ratesId}> 
                <div className="comment-left">
                    <p>{ratesUserNickname[0].toUpperCase()}</p>
                </div>
                <div className="comment-public">
                    <div className="comment-public-header">
                        <h4>{ratesUserNickname}</h4>
                        <span>Nota: {score}</span>
                        <h5>{date}</h5>
                    </div>
                    <div className="comment-public-body">
                        <p>{comment}</p>
                    </div>
                </div>
            </section>
        )}
        {isShowing === true ? (
            <div className="modal-overlay">
                <div className="modal-container">
                    <div className="modal-header">
                        <h1>Remover Avaliação?</h1>
                        <img src={x} width="16" height="16" onClick={showModal}/>
                    </div>
                    <div className="modal-body">
                        <p>Deseja realmente remover esta avaliação? Essa ação não poderar ser desfeita!</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={showModal} id="btn-cancel">Cancelar</button>
                        <button onClick={removeRate}>Confirma</button>
                    </div>
                </div>
            </div>
            ) : null}
        </>
    );
}