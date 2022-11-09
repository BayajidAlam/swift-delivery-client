import React, { useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import updateIcon from  '../../assets/update.png'

const TableRow = ({singleReview}) => {
 
  
  const { _id,review, reviewerEmail, reviewerName, reviewerImage, serviceName } = singleReview;
  console.log(_id)

  
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?')
    if(proceed){
      fetch(`http://localhost:5000/reviews/${id}`,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
       console.log(data)
      })
    }
  }

  return (

    <div className=" w-full my-4 p-2">
    <table className="table w-full">
  
      <thead>
        <tr>
          <th>
            <label>
                  Service
            </label>
          </th>
          <th>Details</th>
          <th>Review</th>
          <th>Action</th>
          <th>
            <p>Delete</p>
          </th>
        </tr>
      </thead>
      <tbody>
       
        <tr >
          <th className='w-[15%]'>
            <label>
                  {serviceName}
            </label>
          </th>
          <td className='w-1/5'>
            <div className="flex items-center ">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={reviewerImage} alt='/' />
                </div>
              </div>
              <div className='ml-3'>
                <div className="font-bold">{reviewerName}</div>
                <div className="text-sm opacity-50">{reviewerEmail}</div>
              </div>
            </div>
          </td> 

          <td className='w-1/5'>
            {
              review
            }
          </td>

          <td className='w-1/5'>
           <img className='h-12 w-12' src={updateIcon} alt="" />
          </td>
          <th>
            <button onClick={()=>{handleDelete(_id)}} className="text-3xl rounded-full">
                    <FaTrashAlt/>
            </button>
          </th>
        </tr>
       
      </tbody>
   
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
      
    </table>
  </div>
  );
};

export default TableRow;