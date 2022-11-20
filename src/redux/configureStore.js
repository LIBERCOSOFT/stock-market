import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import homepageReducer from './homepage/homepage';

const rootReducer = combineReducers({ homepage: homepageReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
