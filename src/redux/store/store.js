/**
 * Add middleware to the store so that whenever actions get fired or dispatched
 * we can catch them and display them, the middleware will recieve actions within and pass to
 * root reducer
 * ie - catch action, log then moves it along
 *
 * middleware that are stored by redux is expected to be an array
 */

import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist/es/persistStore';
import logger from 'redux-logger';
import rootReducer from 'redux/root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// this will be essentially a persisted version of the store
export const persistor = persistStore(store);

export default store;
