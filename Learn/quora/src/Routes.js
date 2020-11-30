import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

//const Registration = import('./modules/User/Signup/registration');
import Registration from './modules/User/Signup/registration';

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/signup">
                    <Registration />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;