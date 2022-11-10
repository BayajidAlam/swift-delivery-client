import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import TableRow from '../../Components/TableRow/TableRow';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
  const { user,logOutUser } = useContext(AuthContext)
  const [ reviews, setReviews ] = useState([])
  useTitle('MyReview')
//---------------------------fetch data by query-------------------------//
  useEffect(()=>{
    fetch(`http://localhost:5000/reviewsquery?email=${user?.email}`,
    {
      headers:{
        authorization : ` Bearer ${localStorage.getItem('swift-token')}`
      }
    })
    .then(res=>{
        if(res.status === 401 || res.status === 403){
          localStorage.removeItem('swift-token')
          return logOutUser()
        }
         return res.json()
    })
    .then(data=>
      {
        console.log(data)
      setReviews(data)
      })
  },[logOutUser, user?.email])
//---------------------------fetch data by query-------------------------//

//-----------------------------delete--------------//
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
          
  //-----------------------------delete--------------//
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