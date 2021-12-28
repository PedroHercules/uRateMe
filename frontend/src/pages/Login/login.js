import React, {useContext} from "react";

import { Context } from '../../Context/authContext'

import './styles.css'
import imageReview from '../../assets/images/imagemReview.svg';

export default function Login() {

    const { authenticated, handleLogin } = useContext(Context);
    console.log(authenticated)

    return(
        <div id='login'>
            <div id='login-body'>
                <div id='login-body-left'>
                    <header>
                        <h1>Logo</h1>
                    </header>
                    
                    <form>
                        <div id="title-login">
                            <h1>Fazer Login</h1>
                            <h3>Preencha todos os campos abaixo para entrar.</h3>
                        </div>
                        <input placeholder='E-mail' title="E-mail" name='email' type='email'></input>
                        <input placeholder='Senha' title="Password"  name='password' type='password'></input>
                        <button onClick={handleLogin} >Entrar</button>
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