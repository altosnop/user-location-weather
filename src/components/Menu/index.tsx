import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/saved-cards'}>Saved cards</Link>
    </nav>
  );
};

export default Menu;
