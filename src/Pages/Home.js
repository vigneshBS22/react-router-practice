import React from 'react';
import { useNavigate } from 'react-router';
import { HOC } from '../components/HOC';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Explore delicious food items which are nutritious and healthy</div>
      <button
        className='rounded-2xl bg-yellow-500 hover:bg-red-300 text-white border-opacity-100 p-2 mt-2 transform hover:scale-105 hover:shadow-2xl'
        onClick={() => {
          navigate('/menu');
        }}
      >
        Explore Menu
      </button>
    </div>
  );
};

export default HOC(Home);
