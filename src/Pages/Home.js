import React from 'react';
import { useNavigate } from 'react-router';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500'>
        <div className='m-auto shadow-2xl bg-white rounded-2xl p-8'>
          {/* <img
            src='https://media.istockphoto.com/photos/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors-picture-id1284690585?b=1&k=20&m=1284690585&s=170667a&w=0&h=HlEPBNsYMVuu-SsohPliBWHJy-IhW9y-fl8dS9KnBBo='
            alt='homepage-img'
            className='rounded-t-2xl'
          /> */}
          <div>
            Explore delicious food items which are nutritious and healthy
          </div>
          <button
            className='rounded-2xl bg-yellow-500 hover:bg-red-300 text-white border-opacity-100 p-2 mt-2 transform hover:scale-105 hover:shadow-2xl'
            onClick={() => {
              navigate('/products');
            }}
          >
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};
