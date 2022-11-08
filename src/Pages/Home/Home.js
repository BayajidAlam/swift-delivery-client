import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ServiceInHome from './ServiceInHome/ServiceInHome';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
     
      <section className='bg-slate-300 rounded-lg
      mb-5'>
        <div className='flex justify-between p-20 items-center'>
        <div>
          <h1 className='text-6xl font-bold'>Explore Our <span className='text-orange-400 text-6xl font-bold'>Services</span></h1>
          <p className='text-3xl w-9/12 mt-8 font-semibold'>Swift Delivery Is Number One Bangladeshi delivery service,We Provide Fastest Delivery Ever.</p>
        </div>
        <Link to='/services'>
        <button className='w-[300px] h-[80px] rounded-lg p-5 text-3xl bg-orange-400 text-white font-samibold' >Explore More</button>
        </Link>
       </div>
      </section>

      <ServiceInHome></ServiceInHome>
    
      <section className='flex justify-center section-2  items-center mb-5'>
          <div className='text-center'>
          <h1 className='text-3xl text-white font-bold'>Swift Delivery</h1>
          <p className='text-white text-4xl font-bold mt-5
          '>Asian Leading Contract Delivery Provider</p>
          <button className='text-white bg-orange-500 w-72 rounded-lg mt-5 h-20  text-3xl p-5'>Contact With Us</button>
          </div>
      </section>
    </div>
  );
};

export default Home;