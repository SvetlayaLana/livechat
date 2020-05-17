import React from 'react';
import { Provider } from "react-redux";
import { MuiThemeProvider } from '@material-ui/core/styles';

import store from 'store';
import Pages from 'pages';
import muiTheme from 'styleVars/muiTheme';

function App() {
  return (
    <Provider store={ store }>
      <MuiThemeProvider theme={muiTheme}>
        <Pages/>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
