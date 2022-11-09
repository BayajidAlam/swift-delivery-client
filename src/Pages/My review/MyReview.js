import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?')
    if(proceed){
      fetch(`http://localhost:5000/reviews/${id}`,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount > 0){
          toast.success('Deleted successfully')
          const remaining = reviews.filter(rev=>rev._id !== id)
          setReviews(remaining)
        }
      })
    }
  }

  return (
    <div>
      {
        reviews.map(review=><TableRow
        key={review._id}
        singleReview={review}
        handleDelete={handleDelete}
        ></TableRow>)
      }
    </div>
  );
};

export default MyReview;