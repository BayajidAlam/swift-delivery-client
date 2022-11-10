import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import updateIcon from  '../../assets/update.png'

const TableRow = ({ singleReview, handleDelete }) => {
 
  
  const { _id,review, reviewerEmail, reviewerName, reviewerImage, serviceName } = singleReview;
  

  return (

    <div className=" w-full my-4 p-2">
    <table className="table w-full">
  
      <thead>
        <tr>
          <th>
            <label>
                  Service Name
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
          <th className='w-[10%]'>
            <label>
                  {serviceName}
            </label>
          </th>
          <td className='w-[20%]'>
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

          <td className='w-[40%]'>
            {
              review
            }
          </td>
         
          <td className='w-[15%]'>
         <Link to={`/update/${_id}`}>  
         <img className='h-12 w-12' src={updateIcon} alt="" />
         </Link>
          </td>
          <th className='w-[15%]'>
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