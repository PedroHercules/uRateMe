import React, {useContext} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from "./Context/authContext";

import Login from './pages/Login/login';
import Home from './pages/Home/home';
import Register from './pages/Register/register';

function CustoRoute({ isPrivate, ...rest}) {
    const {loading, authenticated} = useContext(Context);

    if(loading){
        return <h1>Loading...</h1>
    }

    if(isPrivate && !authenticated){
        return <Redirect to='/login'/>
    }

    return <Route {...rest}/>
}

export default function Routes() {
    return (
        <Switch>
            <CustoRoute exact path='/login' component={Login}></CustoRoute>
            <CustoRoute exact path='/register' component={Register}></CustoRoute>
            <CustoRoute isPrivate exact path='/home' component={Home}></CustoRoute>
        </Switch>
    );
}