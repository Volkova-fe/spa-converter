import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendors/normalize.module.css';
import App from './App';
import { store } from './services/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
