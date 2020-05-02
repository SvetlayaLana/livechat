import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";

import { history } from '../store';

import LoginPage from '../pages/LoginPage';
import ChatPage from '../pages/ChatPage';

export default () => (
    <ConnectedRouter history={ history }>
        <Switch>
            <Route path="/login" component={ LoginPage }/>
            <Route path="/chat" component={ ChatPage }/>
            <Route component={ LoginPage }/>
        </Switch>
    </ConnectedRouter>
)
