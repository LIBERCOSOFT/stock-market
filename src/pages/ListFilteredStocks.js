/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchStocks } from '../redux/homepage/homepage';
import Loader from '../components/Loader';

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

const ListFilteredStocks = () => {
  const allStocks = useSelector((state) => state.allStocks.data);
  const loading = useSelector((state) => state.allStocks.loading);
  const [render, setRender] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allStocks.allAssets.length < 1) {
      dispatch(fetchStocks());
    }
    setRender(true);
  }, [dispatch, allStocks]);

  const { id } = useParams();
  const typeSpecified = {
    'Consumer Cyclical': consumerCyclical,
    Energy: energy,
    Technology: technology,
    Industrials: industrial,
    'Financial Services': financialServices,
    'Basic Materials': basicMaterials,
    'Communication Services': communicationServices,
    'Consumer Defensive': consumerDefence,
    Healthcare: healthCare,
    'Real Estate': realEstate,
    Utilities: utilities,
    'Industrial Goods': industrialGoods,
    Financial: financial,
    Services: services,
    Conglomerates: conglomerates,
  };
  return (
    <>
      <div className="type__container">
        <img src={typeSpecified[id]} alt="" />
        <h3>
          {id}
          {' '}
          in Stock Exchange
          {' '}
        </h3>
      </div>
      {loading ? <Loader /> : null}
      <div className="list__container">
        <ul>
          {render ? (allStocks[`${id}`] || []).map((stock) => (
            <li key={stock.symbol}>
              <Link to={`/details/${stock.symbol}`}>
                <div>
                  <p>
                    <span>Name:</span>
                    {' '}
                    {stock.companyName}
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

export default ListFilteredStocks;
