import React from 'react';
import { useParams } from 'react-router';
import { Card } from './Card';

export const CardList = ({ data }) => {
  const { category } = useParams();
  data = category ? data.find((item) => item.name === category).items : data;
  return (
    <div className='grid grid-cols-3'>
      {data.map((food) => {
        return (
          <div key={food.id}>
            <Card food={food} type={category ? 'food' : category} />
          </div>
        );
      })}
    </div>
  );
};
