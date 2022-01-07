import React, {useContext} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from "./Context/authContext";

import Login from './pages/Login/login';
import Home from './pages/Home/home';
import Register from './pages/Register/register';
import Details from './pages/Details/details';
import Filmes from './pages/Filmes/filmes';
import Series from './pages/Series/series';

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

    const {authenticated} = useContext(Context);

    return (
        <Switch>
            <CustoRoute 
                exact 
                path="/login" 
                render={() => 
                    authenticated ? <Redirect to="/" /> : <Login />
                } 
            />
            <CustoRoute 
                exact 
                path="/register" 
                render={() => 
                    authenticated ? <Redirect to="/" /> : <Register />
                }
            />
            <CustoRoute isPrivate exact path="/" component={Home} />
            <CustoRoute isPrivate exact path="/details" component={Details} />
            <CustoRoute isPrivate exact path="/filmes" component={Filmes} />
            <CustoRoute isPrivate exact path="/series" component={Series} />
        </Switch>
    );
}