import React from 'react';
import deliveryPic from '../../assets/3686725.jpg'

const Banner = () => {
  return (
    <div className='bg-slate-300 w-full h-80 rounded-md mt-5 flex mb-5'>
      <div className='w-1/2'>
        <p className='text-5xl text-center mt-12 font-bold'>FASTEST</p>
        <p className='text-5xl text-center mt-8 font-bold'>DELIVERY IN</p>
        <p className='text-5xl text-center mt-8 font-bold'>whole BANGLADESH</p>
      </div>
      <div className='w-1/2'>
          <img className='h-72 mt-4 ml-20 rounded-lg' src={deliveryPic} alt="" />
      </div>
    </div>
  );
};

export default Banner;