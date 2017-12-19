import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

// ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById( 'root' );

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  ReactDOM.render( <h1>Hello!</h1>, root );
} );

registerServiceWorker();
