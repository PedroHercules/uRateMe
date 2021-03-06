import React, {useContext} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from "./Context/authContext";

import Login from './pages/Login/login';
import Home from './pages/Home/home';
import Register from './pages/Register/register';
import Details from './pages/Details/details';
import Filmes from './pages/Filmes/filmes';
import Series from './pages/Series/series';
import AddMoviesSeries from './pages/AddMoviesSeries/addMoviesSeries';
import Rates from './components/Rates/rates';
import PageHeader from "./components/PageHeader/pageHeader";
import NavBarProfile from './components/NavBarProfile/navBarProfile';
import Profile from "./components/Profile/profile";
import Sobre from './pages/Sobre/sobre';
import Ajuda from './pages/Ajuda/ajuda';
import Footer from "./components/Footer/footer";

function CustoRoute({ isPrivate, isAdmin, children, ...rest}) {
    const {loading, authenticated, user} = useContext(Context);

    if(loading){
        return <h1>Loading...</h1>
    }

    if(isAdmin && !user.isAdmin){
        console.log(user);
        return <Redirect to='/'/>
    }

    if(isPrivate && !authenticated){
        return <Redirect to='/login'/>
    }

    return <Route {...rest} />
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
            <CustoRoute isPrivate exact path="/sobre" component={Sobre} />
            <CustoRoute isPrivate exact path="/ajuda" component={Ajuda} />
            
            <CustoRoute isPrivate exact path="/Profile"  render={(props) => (
                <div style={{'height': '100%', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between'}}>
                    <PageHeader />
                    <NavBarProfile select={1} {...props} />
                    <Footer {...props} />
                </div>
            )}/>
            <CustoRoute isPrivate exact path="/Rates"  render={(props) => (
                <div style={{'height': '100%', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between'}}>
                    <PageHeader />
                    <div style={{'height': '100%', 'display': 'flex',}}>
                    <NavBarProfile select={2} {...props} />
                    <Rates {...props} />
                    </div>
                    <Footer {...props} />
                </div>
            )}/>
            <CustoRoute isPrivate exact path="/updateProfile"  render={(props) => (
                <div style={{'height': '100%', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between'}}>
                    <PageHeader />
                    <div style={{'height': '100%', 'display': 'flex',}}>
                    <NavBarProfile  select={1} {...props} />
                    <Profile {...props} />
                    </div>
                    <Footer {...props} />
                </div>
            )}/>
            <CustoRoute isPrivate isAdmin exact path="/cadastrar" component={AddMoviesSeries} />
            <CustoRoute component={Home} />
        </Switch>
    );
}