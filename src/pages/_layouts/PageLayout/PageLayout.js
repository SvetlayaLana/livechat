import React from 'react';
import Particles from 'react-particles-js';
import { ExitToApp } from '@material-ui/icons';
import classnames from 'classnames';

import particlesConfig from './particlesConfig';
import theme from './PageLayout.scss';

const PageLayout = ({ children, userName, logout, isAuthorized }) => (
  <div className={ theme.page }>
    <header className={ theme.header }>
      <div className={ theme.container }>
        <div className={ theme.logo }>
          <h2>LiveChat</h2>
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
    <div className={ classnames(theme.content, {
      [theme.chatContainer]: isAuthorized,
    }) }>
      { children }
    </div>
  </div>
);

export default PageLayout;
