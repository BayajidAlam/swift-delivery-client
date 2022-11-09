import React, { useContext, useEffect, useState } from 'react';
import TableRow from '../../Components/TableRow/TableRow';
import { AuthContext } from '../../Context/AuthProvider';

const MyReview = () => {
  const { user } = useContext(AuthContext)
  const [ reviews, setReviews ] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[user?.email])

  return (
    <div>
      {
        reviews.map(review=><TableRow
        key={review._id}
        singleReview={review}
        ></TableRow>)
      }
    </div>
  );
};

export default MyReview;