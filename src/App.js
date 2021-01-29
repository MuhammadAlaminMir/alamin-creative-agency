import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import './App.css';

import { createContext, useState } from 'react';
import LogInPage from './components/Login/LogInPage.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Customer from './components/Customer/Customer';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <LogInPage />
                    </Route>
                    <PrivateRoute path="/customer">
                        <Customer />
                    </PrivateRoute>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
