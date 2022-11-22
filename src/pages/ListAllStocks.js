/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStocks } from '../redux/homepage/homepage';
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
            <li key={stock.symbol}>
              <Link to={`/details/${stock.symbol}`}>
                <div>
                  <p>
                    <span>Name:</span>
                    {' '}
                    {stock.companyName}
                  </p>
                  <p>
                    <span>Sector:</span>
                    {' '}
                    {stock.sector}
                  </p>
                  <p>
                    <span>Industry:</span>
                    {' '}
                    {stock.industry}
                  </p>
                  <p>
                    <span>Price per Stock:</span>
                    {' '}
                    $
                    {stock.price}
                  </p>
                  <p>
                    <span>Market Cap:</span>
                    {' '}
                    $
                    {stock.marketCap.toLocaleString()}
                  </p>
                  <p>
                    <span>
                      See about
                      {' '}
                      {stock.symbol}
                    </span>
                    {' '}
                    <i className="fa-sharp fa-solid fa-arrow-right" />
                  </p>
                </div>
              </Link>
            </li>
          )) : <Loader />}
        </ul>
      </div>
    </>
  );
};

export default ListAllStocks;
