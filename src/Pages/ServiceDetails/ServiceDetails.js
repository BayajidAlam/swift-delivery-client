import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

  const service = useLoaderData()
  const { image, name, discription, price} = service
  return (
    <div className=' rounded-lg'>
      <p className='text-center text-3xl mt-3 font-serif text-blue-400 underline'>Service Details</p>
      <section className='bg-slate-300 mt-3  pb-8'>
        <img className='w-1/2 mx-auto h-1/4 py-5' src={image} alt="" />
       
      <div className='bg-slate-200 w-3/4 mx-auto p-3 rounded-2xl'>
      <div className='flex justify-between items-center w-3/4 mx-auto mt-3'> 
        <p className='font-medium text-3xl'>Service name: {name}</p>
        <p className='font-medium text-3xl'>Price: {price}</p>
        </div>
      <div>
      <p className='text-2xl w-3/4 mx-auto mt-2'><span className='font-bold'>Service Description:</span> {discription}</p>
      </div>
      </div>
      </section>

      <section className='bg-slate-300 mb-3'>
        <p className='mx-auto text-3xl w-48 text-center rounded-lg font-serif text-white bg-indigo-400'>User Review</p>
       <div>
       <p className='text-center text-xl p-3'>Please <Link className='text-indigo-400 w-40' to='/login'>login</Link> to add review</p>
       </div>
      </section>
    </div>
  );
};

export default ServiceDetails;