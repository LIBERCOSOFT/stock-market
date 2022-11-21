/* eslint-disable max-len */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getAllStocks } from '../APIs';

const GET_ALL_STOCKS = 'stockMarket/homepage/getAllStocks';

const allStocksApiCall = async () => {
  const stocks = await axios.get(getAllStocks);
  const data = {
    'Consumer Cyclical': [],
    Energy: [],
    Technology: [],
    Industrials: [],
    'Financial Services': [],
    'Basic Materials': [],
    'Communication Services': [],
    'Consumer Defensive': [],
    Healthcare: [],
    'Real Estate': [],
    Utilities: [],
    'Industrial Goods': [],
    Financial: [],
    Services: [],
    Conglomerates: [],
    allAssets: stocks.data,
  };
  stocks.data.forEach((val) => {
    switch (val.sector) {
      case 'Consumer Cyclical':
        data['Consumer Cyclical'].push(val);
        break;
      case 'Energy':
        data.Energy.push(val);
        break;
      case 'Technology':
        data.Technology.push(val);
        break;
      case 'Industrials':
        data.Industrials.push(val);
        break;
      case 'Financial Services':
        data['Financial Services'].push(val);
        break;
      case 'Basic Materials':
        data['Basic Materials'].push(val);
        break;
      case 'Communication Services':
        data['Communication Services'].push(val);
        break;
      case 'Consumer Defensive':
        data['Consumer Defensive'].push(val);
        break;
      case 'Healthcare':
        data.Healthcare.push(val);
        break;
      case 'Real Estate':
        data['Real Estate'].push(val);
        break;
      case 'Utilities':
        data.Utilities.push(val);
        break;
      case 'Industrial Goods':
        data['Industrial Goods'].push(val);
        break;
      case 'Financial':
        data.Financial.push(val);
        break;
      case 'Services':
        data.Services.push(val);
        break;
      case 'Conglomerates':
        data.Conglomerates.push(val);
        break;
      default:
        return null;
    }
    return null;
  });
  return data;
};

export const fetchStocks = createAsyncThunk(GET_ALL_STOCKS, allStocksApiCall);

const homepageReducer = (allStocks = {
  data: {
    'Consumer Cyclical': [],
    Energy: [],
    Technology: [],
    Industrials: [],
    'Financial Services': [],
    'Basic Materials': [],
    'Communication Services': [],
    'Consumer Defensive': [],
    Healthcare: [],
    'Real Estate': [],
    Utilities: [],
    'Industrial Goods': [],
    Financial: [],
    Services: [],
    Conglomerates: [],
    allAssets: [],
  },
  loading: true,
}, action) => {
  switch (action.type) {
    case `${GET_ALL_STOCKS}/fulfilled`:
      return { data: action.payload, loading: false };
    default:
      return allStocks;
  }
};

export default homepageReducer;
