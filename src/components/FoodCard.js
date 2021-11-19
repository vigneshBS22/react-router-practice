import React from 'react';
import { useParams } from 'react-router';
import { data1 } from '../data';

export const FoodCard = () => {
  const { category, embedId } = useParams();
  const item = data1.find((item) => item.name === category);
  const food = item.items.find((food) => food.id === +embedId);
  return (
    <div>
      <div className='bg-white flex flex-row shadow-2xl h-full rounded-lg self-center w-9/12 m-auto mt-20 max-h-96'>
        <img
          src={food.img}
          alt='burger-img'
          className='rounded-t-lg h-6/12 w-6/12'
        />
        <div className='flex flex-col justify-around gap-8 mx-auto p-4'>
          <div className='m-4 text-xl font-bold underline'>{food.name}</div>
          <div className='font-extralight'>{food.content}</div>
          <div>₹{food.price}</div>
          <button className='rounded-2xl bg-green-400 hover:bg-green-500 text-white border-opacity-100 p-2 mt-2'>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
