import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById( 'root' );

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  ReactDOM.render(<Root store={ store }/>, root);
} );

registerServiceWorker();
