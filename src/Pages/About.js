import React from 'react';
import { HOC } from '../components/HOC';

export const About = () => {
  return (
    <div>
      <div className='font-bold'>Our Mission</div>
      <div className='mt-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, itaque
        nisi? Sint atque laudantium rem consectetur. Tenetur nostrum veniam
        rerum!
      </div>
      <div className='font-bold mt-6'>About Us</div>
      <div className='mt-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, itaque
        nisi? Sint atque laudantium rem consectetur. Tenetur nostrum veniam
        rerum!
      </div>
    </div>
  );
};

export default HOC(About);
