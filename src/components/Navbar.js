import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-4 shadow-2xl'>
      <div
        className='p-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </div>
      <div
        className='py-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        onClick={() => {
          navigate('/products');
        }}
      >
        Products
      </div>
      <div
        className='py-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        onClick={() => {
          navigate('/about');
        }}
      >
        About
      </div>
    </div>
  );
};
