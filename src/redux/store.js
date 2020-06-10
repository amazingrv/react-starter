import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';
import counterReducer from './slices/counter.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const preloadedState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: [],
});

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, and devtools enhancers were automatically composed together
export default store;
