import React from "react";
import { Switch, Route } from 'react-router-dom';

import Login from './pages/login';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/login' component={Login}></Route>
        </Switch>
    );
}