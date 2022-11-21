import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocks } from '../redux/homepage/homepage';

import allStockImg from '../components/images/all_stock.svg';
import stockImg from '../components/images/stock.svg';
import eftImg from '../components/images/etf.svg';
import fundImg from '../components/images/funds.svg';
import trustImg from '../components/images/trust.svg';

const Homepage = () => {
  const allStocks = useSelector((state) => state.allStocks.data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (allStocks.length < 1) {
      dispatch(fetchStocks());
    }
  }, [dispatch, allStocks]);

  return (
    <div className="homepage">
      <div className="all__stock__container">
        <img src={allStockImg} alt="" />
        <div>
          <h2>All Stock Data On The Stock Market</h2>
          <span>
            {allStocks.length.toLocaleString()}
            {' '}
            Stocks
          </span>
          <button type="button">
            See Frist 1000 Stocks
            {' '}
            <i className="fa-sharp fa-solid fa-arrow-right" />
            {' '}
          </button>
        </div>
      </div>
      <h4>Filter By:</h4>
      <div className="filter__container">
        <div>
          <i className="fa-sharp fa-solid fa-arrow-right" />
          <img src={stockImg} alt="" />
          <h3>Stock</h3>
          <span>First 1000 Stocks</span>
        </div>
        <div>
          <i className="fa-sharp fa-solid fa-arrow-right" />
          <img src={trustImg} alt="" />
          <h3>Trust</h3>
          <span>First 1000 Trusts</span>
        </div>
        <div>
          <i className="fa-sharp fa-solid fa-arrow-right" />
          <img src={eftImg} alt="" />
          <h3>ETF</h3>
          <span>First 1000 Etfs</span>
        </div>
        <div>
          <i className="fa-sharp fa-solid fa-arrow-right" />
          <img src={fundImg} alt="" />
          <h3>Fund</h3>
          <span>First 1000 Funds</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
