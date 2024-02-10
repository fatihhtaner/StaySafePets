import React from 'react';
import Router from './src/Router'
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;
