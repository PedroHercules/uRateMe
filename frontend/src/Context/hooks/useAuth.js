import { useState, useEffect } from "react";

import api from '../../api';
import history from "../../history";

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if(token && user){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            api.defaults.headers.User = JSON.stringify(user);
            setUser(user);
            setAuthenticated(true);
        }

        setLoading(false);
    }, [])
    
    async function handleLogin({nickname, password}) {
        console.log(nickname, password)
        await api.post('/auth/authenticate', {
            "nickname": nickname, 
            "password": password
        }).then(response => {
            //console.log(data);

            localStorage.setItem('token', JSON.stringify(response.data.token));
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            localStorage.setItem('user', JSON.stringify(response.data.user));
            api.defaults.headers.Authorization = JSON.stringify(response.data.user);
            
            setAuthenticated(true);
            setUser(response.data.user);
            history.push('/');
        }).catch(err => {
            console.log(err.response.data)
        })

    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        api.defaults.headers.Authorization = undefined;

        history.push('/login');
    }

    async function handleRegister({nickname,email,password}) {
        setAuthenticated(true);
        await api.post('/auth/register', {   
            "nickname": nickname, 
            "email": email,
            "password": password
        }).then(response => {
            console.log(response.data);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            localStorage.setItem('user', JSON.stringify(response.data.user));
            api.defaults.headers.Authorization = JSON.stringify(response.data.user);

            setAuthenticated(true);
            setUser(response.data.user);
            history.push('/');
        }).catch(err => {
            console.log(err.response);
        })
    }

    return { loading, authenticated, handleLogin, handleLogout, handleRegister, user }
}