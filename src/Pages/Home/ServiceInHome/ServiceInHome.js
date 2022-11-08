import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../../Components/Service/Service';

const ServiceInHome = () => {
  const [ services, setServices ] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/servicesOfHome')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div>
    <h2 className='text-5xl text-center font-semibold'>Our Services {services.length}</h2>
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
    {
      services.map(service => <Service
      key={service._id}
      service={service}
      ></Service>)
    }
    </div>
    <div className='text-center mb-3'>
        <Link to='/services'>
        <button className='btn-outline px-5 py-2 bg-orange-500 text-2xl rounded-md my-4'>See all services</button>
        </Link>
      </div>
  </div>
  );
};

export default ServiceInHome;