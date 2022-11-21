import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <Link to="/">
        {' '}
        <i className="fa-solid fa-chevron-left" />
        2022
      </Link>
      <p>
        {pathname}
      </p>
      <div>
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </nav>
  );
};

export default Navbar;
