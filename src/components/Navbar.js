import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-4 shadow-2xl bg-white'>
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
          navigate('/menu');
        }}
      >
        Menu
      </div>
      <div
        className='py-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        onClick={() => {
          navigate('/about');
        }}
      >
        About
      </div>
      <div
        className='py-2 m-4 text-gray-600 cursor-pointer hover:text-gray-400'
        onClick={() => {
          navigate('/contact');
        }}
      >
        Contact Us
      </div>
    </div>
  );
};
