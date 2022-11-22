/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import allStockImg from '../components/images/all_stock.svg';

const ListAllStocks = () => {
  const allStocks = useSelector((state) => state.allStocks.data.allAssets);

  return (
    <>
      <div className="type__container">
        <img src={allStockImg} alt="" />
        <h3>
          All Stocks in Stock Exchange
        </h3>
      </div>
      <div className="list__container">
        <ul>
          {allStocks.map((stock) => (
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
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListAllStocks;
