import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootSaga from './store/rootSaga'
import configureStore, { sagaMiddleware } from './store/store'
import App from './App';

const store = configureStore()
sagaMiddleware.run(rootSaga) // run the saga after store is created

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
