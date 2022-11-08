import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
  const [ services, setServices ] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div>
      <h2 className='text-5xl text-center font-semibold'>Our Services {services.length}</h2>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
      {
        services.map(service => <Service
        key={service._id}
        service={service}
        ></Service>)
      }
      </div>
    </div>
  );
};

export default Services;