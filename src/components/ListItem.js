import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({ stock }) => (
  <li>
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
          <span>Exchange:</span>
          {' '}
          {stock.exchange}
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
);

ListItem.propTypes = {
  stock: PropTypes.instanceOf(Object).isRequired,
};

export default ListItem;
