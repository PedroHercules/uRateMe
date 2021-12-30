import React, {useContext, useState} from "react";

import { Context } from '../../Context/authContext'

import './styles.css'
import imageReview from '../../assets/images/imagemReview.svg';

export default function Register(){

    const { authenticated, handleRegister } = useContext(Context);
    console.log(authenticated);

    const [nickname, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function register(e) {
        e.preventDefault();

        handleRegister({email, nickname, password});
    }

    return (
        <div id='register'>
            <div id='register-body'>
                <div id='register-body-left'>
                    <header>
                        <h1>Logo</h1>
                    </header>
                    
                    <form>
                        <div id="title-register">
                            <h1>Cadastrar</h1>
                            <h3>Preencha todos os campos abaixo para entrar.</h3>
                        </div>
                        <input 
                            placeholder='Nick Name' 
                            title="nickname" 
                            name='nickname' 
                            type='text'
                            value={nickname}
                            onChange={e => setNickName(e.target.value)}
                        ></input>
                        <input 
                            placeholder='E-mail' 
                            title="E-mail" 
                            name='email' 
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        ></input>
                        <input 
                            placeholder='Senha' 
                            title="Password"  
                            name='password' 
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        ></input>
                        <button onClick={register} >Cadastrar</button>
                        <h3>Já possui uma conta?</h3>
                        <a href="/login">clique aqui</a>
                    </form>
                </div>
                <div id='register-body-right'>
                    <img src={imageReview} alt=''/>
                </div>
            </div>
        </div>
    );
}