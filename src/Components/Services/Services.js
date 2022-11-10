import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);

  useTitle("Services");
  useEffect(() => {
    fetch("https://swift-delivery-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {loading ? (
        <div className=" mt-20 mb-[700px]">

          <div className="border border-blue-400 shadow rounded-md p-4  w-1/2 mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-300 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-300 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-4xl text-center font-semibold">Our Services</h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
