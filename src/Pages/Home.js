import React from 'react';
import { useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex h-screen'>
        <div className='m-auto  shadow-2xl bg-white rounded-2xl p-8'>
          <div>
            Explore delicious food items which are nutritious and healthy
          </div>
          <button
            className='rounded-2xl bg-yellow-500 hover:bg-red-300 text-white border-opacity-100 p-2 mt-2 transform hover:scale-105 hover:shadow-2xl'
            onClick={() => {
              navigate('/menu');
            }}
          >
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};
