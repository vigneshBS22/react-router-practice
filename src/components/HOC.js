import React from 'react';

export const HOC = (Component) => {
  return (props) => {
    return (
      <div className='flex h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500'>
        <div className='m-auto mt-10 shadow-2xl bg-white rounded-2xl p-8 w-6/12'>
          <Component {...props} />
        </div>
      </div>
    );
  };
};
