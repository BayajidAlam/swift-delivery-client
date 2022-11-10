import { data } from "autoprefixer";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("AddService");
  const date = new Date().toLocaleString();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const image = form.url.value;
    const discription = form.description.value;

    const service = {
      image,
      price,
      name,
      discription,
      date,
    };

    fetch("https://swift-delivery-server.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service added successfully!");
          form.reset();
        }
      });
  };

  return (
    <div className="border p-10 border-violet-300 my-5 rounded-lg w-1/2 mx-auto bg-slate-300">
      <p className="text-center text-3xl font-semibold">Add Service</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col ml-28">
          <input
            className="border border-violet-300 p-3 w-3/4  rounded-md ml-4 my-3"
            type="text"
            name="name"
            placeholder="Service Name"
            required
          />

          <input
            className="border border-violet-300 p-3 w-3/4  rounded-md ml-4 my-3"
            type="text"
            name="price"
            placeholder="Service Price"
            required
          />

          <input
            className="border border-violet-300 p-3 w-3/4  rounded-md ml-4 my-3"
            type="text"
            name="url"
            placeholder="PhotoURL"
            required
          />

          <textarea
            className="w-3/4 border border-violet-300 rounded-lg p-3 ml-4"
            name="description"
            placeholder="service Descrioption"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-violet-300 my-3 text-3xl w-32 h-12 rounded-lg text-slate-600 font-bold"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddService;
