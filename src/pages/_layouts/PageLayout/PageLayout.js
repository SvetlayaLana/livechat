import React from 'react';
import theme from './PageLayout.scss';

const PageLayout = ({ children }) => (
  <div className={ theme.page }>
    <header className={ theme.header }>
      <h2>PrimeChat</h2>
    </header>
    <div className={ theme.container }>
      { children }
    </div>
  </div>
);

export default PageLayout;
