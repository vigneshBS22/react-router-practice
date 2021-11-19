import React from 'react';
import { Card } from './Card';

export const CardList = ({ data }) => {
  return (
    <div className='grid grid-cols-3'>
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
