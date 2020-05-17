import React from 'react';
import Particles from 'react-particles-js';
import { ExitToApp } from '@material-ui/icons';
import { Link } from "react-router-dom";

import particlesConfig from './particlesConfig';
import theme from './PageLayout.scss';

const PageLayout = ({ children, userName, logout, isAuthorized }) => (
  <div className={ theme.page }>
    <header className={ theme.header }>
      <div className={ theme.container }>
        <div className={ theme.logo }>
          <Link to="/">
            <h2>LiveChat</h2>
          </Link>
        </div>
        {
          isAuthorized &&
          <div className={ theme.privateInfo }>
            <div className={ theme.userName }>
              { userName }
            </div>
            <button
                onClick={ logout }
                className={ theme.logout }
            >
              <ExitToApp className={ theme.icon }/>
              <span>Log out</span>
            </button>
          </div>
        }
      </div>
    </header>
    <Particles
        className={ theme.particlesWrapper }
        params={ particlesConfig }
    />
    <div className={ theme.content }>
      { children }
    </div>
  </div>
);

export default PageLayout;
