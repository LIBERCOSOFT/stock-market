/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import detailsReducer from './details/details';
import homepageReducer from './homepage/homepage';

const rootReducer = combineReducers({ allStocks: homepageReducer, stockProfile: detailsReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
