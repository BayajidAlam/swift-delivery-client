import React from 'react';

const Service = ({service}) => {
  const { name, image, discription ,price } = service
 
  return (
    <div className="card card-compact w-11/12 bg-base-100 shadow-xl mx-auto">
    <figure><img className='w-full p-5 rounded h-[394px]' src={image} /></figure>
    <div className="card-body">
      <div className='flex justify-between'>
      <h2 className="text-3xl font-bold">{name}</h2>
      <h2 className='text-3xl font-bold'>Price: {price}</h2>
      </div>
      <p className='text-2xl'>{(discription.length>100?discription.slice(0,100):discription)+"... seemore"}</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
  </div>
  );
};

export default Service;