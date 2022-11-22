/* eslint-disable max-len */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getStockProfile } from '../APIs';

const GET_STOCK_PROFILE = 'stockMarket/details/getStockProfile';

const stockProfileApiCall = async (stock) => {
  const stocks = await axios.get(getStockProfile(stock));
  return stocks.data;
};

export const fetchStockProfile = createAsyncThunk(GET_STOCK_PROFILE, stockProfileApiCall);

const detailsReducer = (stockProfile = [{}], action) => {
  switch (action.type) {
    case `${GET_STOCK_PROFILE}/fulfilled`:
      return action.payload;
    default:
      return stockProfile;
  }
};

export default detailsReducer;
