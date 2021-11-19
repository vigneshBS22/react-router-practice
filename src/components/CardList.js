import React from 'react';
import { Card } from './Card';

export const CardList = ({ data }) => {
  return (
    <div className='grid grid-cols-3 h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500'>
      {data.map((food) => {
        return (
          <div key={food.id}>
            <Card food={food} />
          </div>
        );
      })}
    </div>
  );
};
