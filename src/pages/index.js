import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";

import { history } from 'store';

import PrivateRoute from 'pages/_hocs/PrivateRoute';
import LoginPage from 'pages/LoginPage';
import ChatPage from 'pages/ChatPage';
import Page404 from 'pages/Page404';

export default () => (
    <ConnectedRouter history={ history }>
        <Switch>
          <Route exact path="/" component={ LoginPage }/>
          <Route exact path="/login" component={ LoginPage }/>
          <PrivateRoute exact path="/chat" component={ ChatPage }/>
          <PrivateRoute exact path="/chat/:userId" component={ ChatPage }/>
          <Route component={ Page404 }/>
        </Switch>
    </ConnectedRouter>
)
