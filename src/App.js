import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';

import { Provider } from 'react-redux';
import store from './store';

import Main from './pages/Main';

const App = () => (
  <Fragment>
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  </Fragment>
)

export default App;
