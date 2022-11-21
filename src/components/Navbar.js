import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  let getRoute = pathname.split('/')[2];
  if (getRoute !== undefined && getRoute.includes('%20')) {
    getRoute = getRoute.replace(/%20/g, ' ');
  }

  return (
    <nav>
      <Link to="/">
        {' '}
        <i className="fa-solid fa-chevron-left" />
        2022
      </Link>
      <p>
        All
        {' '}
        {getRoute}
        {' '}
        Stocks
      </p>
      <div>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </nav>
  );
};

export default Navbar;
