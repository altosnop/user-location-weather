import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link className="mr-5 text-blue-500 hover:text-blue-800" to={'/'}>
          Home
        </Link>
        <Link className="text-blue-500 hover:text-blue-800" to={'/saved-cards'}>
          Saved cards
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
