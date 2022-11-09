import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ServiceDetails = () => {

  const service = useLoaderData()
  const { _id,image, name, discription, price} = service
  const { user } = useContext(AuthContext)
  

  const handleAddReview = (event) => {
    event.preventDefault()
    const form = event.target;
    const message = form.review.value
    
    const review = {
      service : _id,
      serviceName : name,
      reviewerName : user.displayName,
      reviewerEmail : user.email,
      reviewerImage : user.photoURL,
      review : message
    }
    
    // send review to server 
    fetch('http://localhost:5000/reviews',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(review)
    })
    .then(res =>res.json())
    .then(data=>{
      if(data.acknowledged){
      toast.success('Review added successfully!');
      form.reset()
      }
    })
  }
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
        <p className='mx-auto text-3xl w-48 text-center rounded-lg font-serif text-white bg-indigo-400 mb-3'>User Review</p>
       {
          user?.email? 
          <>
         <form onSubmit={handleAddReview}>
         <div className='w-3/4 mx-auto rounded-lg bg-slate-200 p-5'>
            <p className='ml-6 p-3 text-xl'><span className='text-2xl font-bold'>User email:</span> {user.email}</p>
            <p className='ml-6 p-3 text-xl'><span className='text-2xl font-bold'>Service id:</span> {_id}</p>
            <textarea name="review" className='h-40 w-96 ml-80 rounded-xl mt-3' placeholder='type your comment here'></textarea>
            <br />
            <div className='text-center'>
            <button type='submit'  className='bg-indigo-300 p-3  text-2xl rounded-md'>Add review</button>
            </div>
            </div>
         </form>
          </>
          :
          <div>
            <p className='text-center text-xl p-3'>Please <Link className='text-indigo-400 w-40' to='/login'>login</Link> to add review</p>
          </div>
       }
      </section>
      <Toaster/>
    </div>
  );
};

export default ServiceDetails;