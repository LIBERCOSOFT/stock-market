import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchStocks } from '../redux/homepage/homepage';

import allStockImg from '../components/images/all_stock.svg';
import stockImg from '../components/images/stock.svg';
import eftImg from '../components/images/etf.svg';
import fundImg from '../components/images/funds.svg';
import trustImg from '../components/images/trust.svg';

const Homepage = () => {
  const allStocks = useSelector((state) => state.allStocks.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (allStocks.length < 1) {
      dispatch(fetchStocks());
    }
  }, [dispatch, allStocks]);

  const filterClick = (e) => {
    const path = `/list/${e.target.id}`;
    navigate(path);
  };

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
          <Link to="/list/all">
            See Frist 1000 Stocks
            {' '}
            <i className="fa-sharp fa-solid fa-arrow-right" />
            {' '}
          </Link>
        </div>
      </div>
      <h4>Filter By:</h4>
      <div className="filter__container">
        <div id="stocks" onClick={filterClick} onKeyDown={filterClick} role="button" tabIndex={0}>
          <i className="fa-sharp fa-solid fa-arrow-right" id="stocks" />
          <img src={stockImg} alt="" id="stocks" />
          <h3 id="stocks">Stock</h3>
          <span id="stocks">First 1000 Stocks</span>
        </div>
        <div id="trusts" onClick={filterClick} onKeyDown={filterClick} role="button" tabIndex={0}>
          <i className="fa-sharp fa-solid fa-arrow-right" id="trusts" />
          <img src={trustImg} alt="" id="trusts" />
          <h3 id="trusts">Trust</h3>
          <span id="trusts">First 1000 Trusts</span>
        </div>
        <div id="etfs" onClick={filterClick} onKeyDown={filterClick} role="button" tabIndex={0}>
          <i className="fa-sharp fa-solid fa-arrow-right" id="etfs" />
          <img src={eftImg} alt="" id="etfs" />
          <h3 id="etfs">ETF</h3>
          <span id="etfs">First 1000 Etfs</span>
        </div>
        <div id="funds" onClick={filterClick} onKeyDown={filterClick} role="button" tabIndex={0}>
          <i className="fa-sharp fa-solid fa-arrow-right" id="funds" />
          <img src={fundImg} alt="" id="funds" />
          <h3 id="funds">Fund</h3>
          <span id="funds">First 1000 Funds</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
