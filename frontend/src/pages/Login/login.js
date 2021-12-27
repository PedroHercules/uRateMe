import React, {useContext} from "react";

import { Context } from '../../Context/authContext'

import './styles.css'
import imageReview from '../../assets/images/imagemReview.svg';

export default function Login() {

    const { authenticated, handleLogin } = useContext(Context);
    console.log(authenticated)

    return(
        <div id='page'>
            <div id='page-body'>
                <div id='page-body-left'>
                    <header>
                        <h1>Logo</h1>
                    </header>
                    
                    <form>
                        <div id="title-register">
                            <h1>Fazer Login</h1>
                            <h3>Preencha todos os campos abaixo para começar</h3>
                        </div>
                        <input placeholder='E-mail' title="E-mail" name='email' type='email'></input>
                        <input placeholder='Senha' title="Password"  name='password' type='password'></input>
                        <button onClick={handleLogin} >Entrar</button>
                    </form>
                </div>
                <div id='page-body-right'>
                    <img src={imageReview} alt=''/>
                </div>
            </div>
        </div>
    )
}