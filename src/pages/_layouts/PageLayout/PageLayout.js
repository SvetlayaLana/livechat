import React from 'react';
import Particles from 'react-particles-js';

import particlesConfig from './particlesConfig';
import theme from './PageLayout.scss';

const PageLayout = ({ children }) => (
  <div className={ theme.page }>
    <header className={ theme.header }>
      <h2>PrimeChat</h2>
    </header>
    <div className={ theme.container }>
      <Particles
          className={ theme.particlesWrapper }
          params={ particlesConfig }
      />
      <div className={ theme.content }>
        { children }
      </div>
    </div>
  </div>
);

export default PageLayout;
