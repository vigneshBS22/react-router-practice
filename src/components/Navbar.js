import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-4 shadow-2xl bg-white'>
      <NavLink
        className='p-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        exact
        activeClassName='active'
        to='/'
      >
        Home{' '}
      </NavLink>
      <NavLink
        className='py-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        activeClassName='active'
        to='/menu'
      >
        Menu
      </NavLink>
      <NavLink
        className='py-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        activeClassName='active'
        to='/about'
      >
        About
      </NavLink>
      <NavLink
        className='py-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        activeClassName='active'
        to='/contact'
      >
        Contact Us
      </NavLink>
    </div>
  );
};
