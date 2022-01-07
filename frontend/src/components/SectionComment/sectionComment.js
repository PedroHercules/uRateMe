import React, {useState} from 'react';

import './styles.css';
import Editar from '../../assets/images/editar.png';
import Lixeira from '../../assets/images/lixeira.png';

import FormRate from '../FormRate/formRate';

export default function SectionComment({ userId, contentId, ratesId, ratesUserNickname, score, date, comment, isMyrate}){
    const [isUpdated, setIsUpdated] = useState(false);

    function update(){
        setIsUpdated(!isUpdated);
    }

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
                                    <img src={Lixeira} alt="Lixeira" width="20" height="20"/>
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
        </>
    );
}