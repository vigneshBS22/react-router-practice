import React from 'react';
import { CardList } from '../components/CardList';
import { data } from '../data';

export const Products = () => {
  return (
    <div>
      <CardList data={data} />
    </div>
  );
};
