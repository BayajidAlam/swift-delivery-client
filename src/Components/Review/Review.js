import React from "react";

const Review = ({ userReview }) => {
  const { reviewerName, reviewerImage, review } = userReview;

  return (
    <div>
      <div className="flex w-3/4 mx-auto items-center">
        <img className="w-16 rounded-full ml-4" src={reviewerImage} alt="" />
        <p className="ml-2 font-bold text-3xl">{reviewerName}</p>
      </div>
      <div className="bg-slate-200 w-[66%] p-5 rounded mx-auto my-2 text-xl">
        {review}
      </div>
    </div>
  );
};

export default Review;
