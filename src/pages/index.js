import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";

import { history } from 'store';

import LoginPage from 'pages/LoginPage';
import ChatPage from 'pages/ChatPage';
import Page404 from 'pages/Page404';

export default () => (
    <ConnectedRouter history={ history }>
        <Switch>
            <Route path="/login" component={ LoginPage }/>
            <Route path="/chat" component={ ChatPage }/>
            <Route path="/" component={ ChatPage }/>
            <Route component={ Page404 }/>
        </Switch>
    </ConnectedRouter>
)
