import React, {useContext, useState} from "react";

import { Context } from '../../Context/authContext'

import './styles.css'
import imageReview from '../../assets/images/imagemReview.svg';

export default function Login() {

    const { authenticated, handleLogin } = useContext(Context);
    const [nickname, setNickName] = useState('');
    const [password, setPassword] = useState('');
    console.log(authenticated)

    function authenticate(e) {
        e.preventDefault();
        console.log(nickname);
        handleLogin({nickname, password});
    }

    return(
        <div id='login'>
            <div id='login-body'>
                <div id='login-body-left'>
                    <header>
                        <h1>Logo</h1>
                    </header>
                    
                    <form >
                        <div id="title-login">
                            <h1>Fazer Login</h1>
                            <h3>Preencha todos os campos abaixo para entrar.</h3>
                        </div>
                        <input 
                            placeholder='Nick Name' 
                            title="nickname" 
                            name='nickname' 
                            type='text'
                            onChange={e => setNickName(e.target.value)}
                            value={nickname}
                        ></input>
                        <input 
                            placeholder='Senha' 
                            title="password"  
                            name='password' 
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        ></input>
                        <button onClick={authenticate}>Entrar</button>
                        <h3>Não possui uma conta?</h3>
                        <a href="/register">clique aqui</a>
                    </form>
                </div>
                <div id='login-body-right'>
                    <img src={imageReview} alt=''/>
                </div>
            </div>
        </div>
    )
}