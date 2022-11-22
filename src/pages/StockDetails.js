import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchStockProfile } from '../redux/details/details';

const StockDetails = () => {
  const stockProfile = useSelector((state) => state.stockProfile);

  const { symbol } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (stockProfile.length < 1 || stockProfile[0].symbol !== symbol) {
      dispatch(fetchStockProfile(symbol));
    }
  }, [dispatch, stockProfile, symbol]);

  return (
    <div className="details__container">
      <img src={stockProfile[0].image} alt="" />
      <p>
        <span>DESCRIPTION:</span>
        {stockProfile[0].description}
      </p>
      <div>

        <p>
          <span>NAME:</span>
          {stockProfile[0].companyName}
        </p>
        <p>
          <span>CEO:</span>
          {' '}
          {stockProfile[0].ceo}
        </p>
        <p>
          <span>WEBSITE:</span>
          {' '}
          {stockProfile[0].website}
        </p>
        <p>
          <span>INDUSTRY:</span>
          {' '}
          {stockProfile[0].industry}
        </p>
        <p>
          <span>Address:</span>
          {' '}
          {stockProfile[0].address}
          ,
          {' '}
          {stockProfile[0].city}
          ,
          {' '}
          {stockProfile[0].state}
          ,
          {' '}
          {stockProfile[0].country}
          .
        </p>
        <p>
          <span>SYMBOL:</span>
          {' '}
          {stockProfile[0].symbol}
        </p>
        <p>
          <span>Price Per Stock:</span>
          {' '}
          $
          {stockProfile[0].price || 0}
        </p>
        <p>
          <span>Market Capital:</span>
          {' '}
          $
          {(stockProfile[0].mktCap || 0).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default StockDetails;
