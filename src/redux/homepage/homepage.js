/* eslint-disable max-len */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAllStocks } from '../APIs';

const GET_ALL_STOCKS = 'stockMarket/homepage/getAllStocks';

const allStocksApiCall = async () => {
  const stocks = await axios.get(getAllStocks);
  return stocks.data;
};

export const fetchStocks = createAsyncThunk(GET_ALL_STOCKS, allStocksApiCall);

const homepageReducer = (allStocks = { data: [], loading: true }, action) => {
  switch (action.type) {
    case `${GET_ALL_STOCKS}/fulfilled`:
      return { data: action.payload, loading: false };
    default:
      return allStocks;
  }
};

export default homepageReducer;
