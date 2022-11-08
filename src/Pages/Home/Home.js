import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import ServiceInHome from './ServiceInHome/ServiceInHome';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
     
      <section className='bg-slate-300 rounded-lg
      mb-5'>
        <div className='flex justify-between p-20 items-center'>
        <div>
          <h1 className='text-6xl font-bold'>Explore Our <span className='text-orange-400 text-6xl font-bold'>Services</span></h1>
          <p className='text-3xl w-9/12 mt-8 font-semibold'>Swift Delivery is onethe  driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
        </div>
        <button className='w-[350px] h-[100px] rounded-lg p-5 text-3xl bg-orange-400 text-white font-samibold' >Explore More</button>
       </div>
      </section>

      <ServiceInHome></ServiceInHome>
    
    </div>
  );
};

export default Home;