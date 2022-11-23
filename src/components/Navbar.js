import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let getRoute = pathname.split('/')[2];
  if (getRoute !== undefined && getRoute.includes('%20')) {
    getRoute = getRoute.replace(/%20/g, ' ');
  }

  return (
    <nav>
      <button type="button" onClick={() => navigate(-1)}>
        {' '}
        <i className="fa-solid fa-chevron-left" />
        2022
      </button>
      <p>
        {(pathname.split('/')[1] === 'details') ? 'About' : 'All'}
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
