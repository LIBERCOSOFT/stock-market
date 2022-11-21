/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStocks } from '../redux/homepage/homepage';

import allStockImg from '../components/images/all_stock.svg';
import consumerCyclical from '../components/images/consumer-svgrepo-com.svg';
import energy from '../components/images/energy-svgrepo-com.svg';
import technology from '../components/images/Technology.svg';
import industrial from '../components/images/industry-svgrepo-com.svg';
import financialServices from '../components/images/financial-services.svg';
import basicMaterials from '../components/images/basic-home-svgrepo-com.svg';
import communicationServices from '../components/images/communication-svgrepo-com.svg';
import consumerDefence from '../components/images/consumer-defence.svg';
import healthCare from '../components/images/healthcare-svgrepo-com.svg';
import realEstate from '../components/images/real-estate-svgrepo-com.svg';
import utilities from '../components/images/Utilities.svg';
import industrialGoods from '../components/images/Industrial_Goods.svg';
import financial from '../components/images/Financial.svg';
import services from '../components/images/Services.svg';
import conglomerates from '../components/images/Conglomerates.svg';

const Homepage = () => {
  const allStocks = useSelector((state) => state.allStocks.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allStocks.allAssets.length < 1) {
      dispatch(fetchStocks());
    }
  }, [dispatch, allStocks]);

  const filterOptions = [
    { query: 'Consumer Cyclical', img: consumerCyclical },
    { query: 'Energy', img: energy },
    { query: 'Technology', img: technology },
    { query: 'Industrials', img: industrial },
    { query: 'Financial Services', img: financialServices },
    { query: 'Basic Materials', img: basicMaterials },
    { query: 'Communication Services', img: communicationServices },
    { query: 'Consumer Defensive', img: consumerDefence },
    { query: 'Healthcare', img: healthCare },
    { query: 'Real Estate', img: realEstate },
    { query: 'Utilities', img: utilities },
    { query: 'Industrial Goods', img: industrialGoods },
    { query: 'Financial', img: financial },
    { query: 'Services', img: services },
    { query: 'Conglomerates', img: conglomerates },
  ];

  return (
    <div className="homepage">
      <div className="all__stock__container">
        <img src={allStockImg} alt="" />
        <div>
          <h2>All Stock Data On The Stock Market</h2>
          <span>
            {allStocks.allAssets.length.toLocaleString()}
            {' '}
            Total Stocks
          </span>
          <Link to="/listall">
            See All Stocks
            {' '}
            <i className="fa-sharp fa-solid fa-arrow-right" />
            {' '}
          </Link>
        </div>
      </div>
      <h4>Filter By Sector:</h4>
      <div className="filter__container">
        {filterOptions.map((val) => (
          <Link to={`/list/${val.query}`} key={val.query}>
            <i className="fa-sharp fa-solid fa-arrow-right" />
            <img src={val.img} alt="" />
            <h3>{val.query}</h3>
            <span>
              {allStocks[val.query].length.toLocaleString()}
              {' '}
              Stocks
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
