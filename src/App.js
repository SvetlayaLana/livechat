import React from 'react';
import { Provider } from "react-redux";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from 'store';
import Pages from 'pages';
import muiTheme from 'styleVars/muiTheme';

function App() {
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <MuiThemeProvider theme={muiTheme}>
          <Pages/>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
