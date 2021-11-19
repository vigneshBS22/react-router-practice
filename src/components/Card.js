import React from 'react';
import { useNavigate, useParams } from 'react-router';

export const Card = ({ food, type }) => {
  const navigate = useNavigate();
  const { category } = useParams();
  return (
    <div>
      {type === 'food' ? (
        <div
          className='flex bg-white flex-col shadow-2xl h-full m-4 rounded-lg self-center w-9/12 transform  hover:scale-105 cursor-pointer'
          onClick={() => navigate(`/menu/${category}/${food.id}`)}
        >
          <img src={food.img} alt='burger-img' className='rounded-t-lg h-72' />
          <div className='m-4 text-xl font-bold'>{food.name}</div>
        </div>
      ) : (
        <div
          className='flex bg-white flex-col shadow-2xl h-full m-4 rounded-lg self-center w-9/12 transform  hover:scale-105 cursor-pointer'
          onClick={() => navigate(`/menu/${food.name}`)}
        >
          <img src={food.img} alt='burger-img' className='rounded-t-lg h-72' />
          <div className='m-4 text-xl font-bold'>{food.name}</div>
        </div>
      )}
    </div>
  );
};
