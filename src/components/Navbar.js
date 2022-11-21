import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">
      {' '}
      <i className="fa-solid fa-chevron-left" />
      2022
    </Link>
    <p>2022 Stock Data</p>
    <div>
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </nav>
);

export default Navbar;
