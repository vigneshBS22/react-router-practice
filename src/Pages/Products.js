import React from 'react';
import { useParams } from 'react-router';
import { CardList } from '../components/CardList';
import { data1 } from '../data';

export const Products = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <CardList data={data1} />
    </div>
  );
};
// products -> menu cards(3 main categories) -> food cards (foods) -> individual card
