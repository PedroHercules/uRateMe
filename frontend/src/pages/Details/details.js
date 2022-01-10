import React, {useContext, useState, useEffect} from 'react';
import api from '../../api';

import './styles.css';

import { Context } from '../../Context/authContext'

import PageHeader from '../../components/PageHeader/pageHeader';
import FormRate from '../../components/FormRate/formRate';
import SectionComment from '../../components/SectionComment/sectionComment';


export default function Details(props) {
    const {user} = useContext(Context);
    
    const [rates, setRates] = useState([]);
    const [myrate, setMyrate] = useState({});
    const [isShowing, setIsShowing] = useState(false);

    

    useEffect(() => {
        api.get(`movies/show/${props.location.state.id}`).then(response => {
            console.log(response.data)
            let vetLates = response.data.rates;
            for(var i = 0; i < vetLates.length; i++){
                if(vetLates[i].userId === user.id){
                    setMyrate(vetLates[i]);
                    vetLates.splice(i, 1);
                }
            }
            console.log(myrate)
            setRates(vetLates);
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
                {Object.values(myrate).length === 0 
                    ? (
                        <FormRate 
                            userId={user.id}
                            contentId={props.location.state.id} 
                            nickname={user.nickname}
                            upScore='1'
                            upComment=''
                            isUpdate={false}
                        />    
                    ) : (
                        <SectionComment 
                            userId={user.id}
                            ratesId={myrate.id} 
                            contentId={myrate.contentId} 
                            ratesUserNickname={myrate.user.nickname} 
                            score={myrate.score} 
                            date={myrate.date} 
                            comment={myrate.comment}
                            isMyrate={true}

                        />
                    )}
                
                {rates.length === 0 
                    ? <h3>Não há comentários</h3> 
                    : (
                        rates.map(rate => (
                            <div key={rate.id}>
                                <SectionComment 
                                    userId={rate.userId} 
                                    contentId={rate.contentId} 
                                    ratesId={rate.id} 
                                    ratesUserNickname={rate.user.nickname} 
                                    score={rate.score} 
                                    date={rate.date} 
                                    comment={rate.comment}
                                    isMyrate={false}
                                />
                            </div>
                        ))
                )}
                
            </div>
            
        </div>
    );
}