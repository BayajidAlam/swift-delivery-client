import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateReview = () => {
  const userReview = useLoaderData();
  const { _id, review, reviewerName, serviceName, reviewerEmail } = userReview;
  const navigate = useNavigate();
  useTitle("UpdateReview");

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;

    // preventing null  for name and review of user 
    let newReview = form.review.value;
    if (newReview === "") {
      newReview = review;
    }
    let newName = form.name.value;
    if (newName === "") {
      newName = reviewerName;
    }

    const user = {
      newName,
      newReview,
    };

    //============= send new data to server ====================//
    fetch(`https://swift-delivery-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("User updated successfully!");
          form.reset();
          navigate("/myreview");
        }
        console.log(data);
      });
  };

    //============= send new data to server ====================//

    
  return (
    <div className="bg-slate-300 rounded-md my-4 pt-32 pb-60">
      <p className="text-center text-3xl py-3">Update review </p>
      <form onSubmit={handleUpdateReview}>
        <div className="flex flex-col ml-[33%]">
          <input
            className="w-1/2 my-2 rounded p-3"
            name="name"
            type="text"
            placeholder={reviewerName}
          />
          <input
            className="w-1/2 my-2 rounded p-3"
            type="text"
            defaultValue={reviewerEmail}
            readOnly
          />
          <input
            className="w-1/2 my-2 rounded p-3"
            type="text"
            defaultValue={serviceName}
            readOnly
          />
          <textarea
            className="w-1/2 h-20 mb-4 rounded p-3"
            name="review"
            placeholder={review}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-300 w-24 text-xl my-3 ml-48 h-10 rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
