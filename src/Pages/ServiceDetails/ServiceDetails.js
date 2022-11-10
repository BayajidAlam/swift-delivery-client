import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../../Components/Review/Review";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, image, name, discription, price } = service;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("ServiceDetails");

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.review.value;
    let photo = user?.photoURL;
    let userName = user?.displayName;
    if (user?.photoURL === null) {
      photo = "https://i.postimg.cc/mrB4CYTC/Max-R-Headshot-1.jpg";
    }
    if (userName === null) {
      userName = "User";
    }
    // organizing review 
    const review = {
      service: _id,
      serviceName: name,
      reviewerName: userName,
      reviewerEmail: user?.email,
      reviewerImage: photo,
      review: message,
    };

    // send review to server
    fetch("https://swift-delivery-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully!");
          form.reset();
          console.log(data);
        }
      });
  };

  useEffect(() => {
    fetch(`https://swift-delivery-server.vercel.app/reviews?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [name]);

  return (
    <div className=" rounded-lg">
      <p className="text-center text-3xl mt-3 font-serif text-blue-400 underline">
        Service Details
      </p>
      <section className="bg-slate-300 mt-3  pb-8">
        <img className="w-1/2 mx-auto h-1/4 py-5" src={image} alt="" />

        <div className="bg-slate-200 w-3/4 mx-auto p-3 rounded-2xl">
          <div className="flex justify-between items-center w-3/4 mx-auto mt-3">
            <p className="font-medium text-3xl">Service name: {name}</p>
            <p className="font-medium text-3xl">Price: {price}</p>
          </div>
          <div>
            <p className="text-2xl w-3/4 mx-auto mt-2">
              <span className="font-bold">Service Description:</span>{" "}
              {discription}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-300 mb-3 mt-3 rounded-xl">
        <div className="pt-4">
          <p className="mx-auto text-3xl w-48 text-center rounded-lg font-serif text-white bg-indigo-400 mb-3">
            User Review
          </p>
        </div>
        <div>
          {reviews.map((review) => (
            <Review key={_id} userReview={review}></Review>
          ))}
        </div>

        {user?.email ? (
          <>
            <form onSubmit={handleAddReview}>
              <div className="w-3/4 mx-auto rounded-lg bg-slate-200 p-5">
                <p className="ml-6 p-3 text-xl">
                  <span className="text-2xl font-bold">User email:</span>{" "}
                  {user.email}
                </p>
                <p className="ml-6 p-3 text-xl">
                  <span className="text-2xl font-bold">Service id:</span> {_id}
                </p>
                <textarea
                  name="review"
                  className="h-40 w-96 ml-80 rounded-xl mt-3"
                  placeholder="type your comment here"
                ></textarea>
                <br />
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-indigo-300 p-3  text-2xl rounded-md"
                  >
                    Add review
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div>
            <p className="text-center text-xl p-3">
              Please{" "}
              <Link className="text-indigo-400 w-40" to="/login">
                login
              </Link>{" "}
              to add review
            </p>
          </div>
        )}
      </section>
      <Toaster />
    </div>
  );
};

export default ServiceDetails;
