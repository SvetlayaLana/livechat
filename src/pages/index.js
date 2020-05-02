import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store";

export default () => (
    <ConnectedRouter history={ history }>
    </ConnectedRouter>
)
