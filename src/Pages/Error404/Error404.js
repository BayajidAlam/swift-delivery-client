import React from 'react';
import img from '../../assets/Na_Nov_26.jpg'
const Error404 = () => {
  return (
    <div>
        <img className='h-3/4 w-3/4 mx-auto' src={img} alt="" />
      <p className='text-5xl text-center'>ERROR404!</p>
      <p className='text-center text-2xl'>PAGE NOT FOUND</p>
    </div>
  );
};

export default Error404;