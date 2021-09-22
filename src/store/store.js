import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import combineReducers from './rootReducer'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export default function configureStore (preloadedState) {
  const middlewares = [sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    combineReducers,
    preloadedState,
    composedEnhancers(...enhancers)
  )
  return store
}
