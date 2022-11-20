/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import homepageReducer from './homepage/homepage';

const rootReducer = combineReducers({ allStocks: homepageReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
