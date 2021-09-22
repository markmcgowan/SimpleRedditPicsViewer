import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootSaga from './store/rootSaga'
import configureStore, { sagaMiddleware } from './store/store'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = configureStore()
sagaMiddleware.run(rootSaga) // run the saga after store is created

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
