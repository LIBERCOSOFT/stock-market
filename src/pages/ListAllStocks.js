/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocks } from '../redux/homepage/homepage';
import ListItem from './ListItem';
import Loader from '../components/Loader';

import allStockImg from '../components/images/all_stock.svg';

const ListAllStocks = () => {
  const allStocks = useSelector((state) => state.allStocks.data.allAssets);
  const loading = useSelector((state) => state.allStocks.loading);
  const [render, setRender] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allStocks.length < 1) {
      dispatch(fetchStocks());
    }
    setRender(true);
  }, [dispatch, allStocks]);

  return (
    <>
      <div className="type__container">
        <img src={allStockImg} alt="" />
        <h3>
          All Stocks in Stock Exchange
        </h3>
      </div>
      {loading ? <Loader /> : null}
      <div className="list__container">
        <ul>
          {render ? allStocks.map((stock) => (
            <ListItem key={stock.symbol} stock={stock} />
          )) : <Loader />}
        </ul>
      </div>
    </>
  );
};

export default ListAllStocks;
