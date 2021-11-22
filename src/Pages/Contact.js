import React from 'react';
import { HOC } from '../components/HOC';

const Contact = () => {
  return (
    <div>
      <div className='font-bold'>Reach Us @</div>
      <div className='mt-4'>Tele no. 99912312319</div>
      <div className='mt-4'>Email Id: abcd@gmail.com</div>
    </div>
  );
};

export default HOC(Contact);
