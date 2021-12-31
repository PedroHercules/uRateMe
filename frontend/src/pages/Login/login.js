import React, {useContext, useState} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Context } from '../../Context/authContext'

import './styles.css'
import imageReview from '../../assets/images/imagemReview.svg';

const schema = yup.object().shape({
    nickname: yup.string().required('Esse campo é obrigatório'),
    password: yup.string().required('Esse campo é obrigatório'),
}).required();

export default function Login() {

    const {register, handleSubmit, setError, clearErrors, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const { authenticated, handleLogin } = useContext(Context);
    const [nickname, setNickName] = useState('');
    const [password, setPassword] = useState('');
    //console.log(authenticated);

    function authenticate(data,e) {
        e.preventDefault();
        console.log(data);
        handleLogin({"nickname": data.nickname, "password": data.password}).catch(response => {
            setError('apiError', {message: response.error});
        });
    }

    return(
        <div id='login'>
            <div id='login-body'>
                <div id='login-body-left'>
                    <header>
                        <h1>Logo</h1>
                    </header>
                    
                    <form onSubmit={handleSubmit(authenticate)}>
                        <div id="title-login">
                            <h1>Fazer Login</h1>
                            <h3>Preencha todos os campos abaixo para entrar.</h3>
                        </div>
                        <div className='inputSpan'>
                            <input 
                                placeholder='Nick Name' 
                                title="nickname" 
                                name='nickname' 
                                type='text'
                                {...register('nickname')}
                            />
                            {errors.nickname && <span><b>Erro:</b> {errors.nickname.message}</span>}
                        </div>

                        <div className='inputSpan'>
                            <input 
                                placeholder='Senha' 
                                title="password"  
                                name='password' 
                                type='password'
                                {...register('password')}
                            />
                            {errors.password && <span><b>Erro:</b> {errors.password.message}</span>}
                        </div>
                        {errors.apiError && <span id='apiSpan'><b>Erro:</b> {errors.apiError.message}</span>}
                        <button type='submit' onClick={() => clearErrors()}>Entrar</button>

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