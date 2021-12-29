import { useState, useEffect } from "react";

import api from '../../api';
import history from "../../history";

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /*const token = localStorage.getItem('token');

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }*/

        setLoading(false);
    }, [])
    
    async function handleLogin({nickname, password}) {
        console.log(nickname, password)
        const {data: {token}} = await api.post('/auth/authenticate', {"nickname": nickname, "password": password});

        //console.log(data);

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        
        setAuthenticated(true);
        history.push('/home');
    }

    function handleLogout() {
        setAuthenticated(false);
        /*localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;*/

        history.push('/login');
    }

    function handleRegister() {
        setAuthenticated(true);
        /*const {data: {token}} = api.post('/register');

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;*/

        history.push('/home');
    }

    return { loading, authenticated, handleLogin, handleLogout, handleRegister }
}