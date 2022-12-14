import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Img from "../../assets/swift.png";
import { AuthContext } from "../../Context/AuthProvider";
const Header = () => {

  const { user, logOutUser } = useContext(AuthContext);
  
  // -------------log out user on click --------------------//
  const handleLogOut = () => {
    logOutUser()
    .then(()=> {
      if(user){
        toast.success('User logOut successfully!')
      } 
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }
 // -------------log out user on click --------------------//

  return (
    <div className="navbar bg-slate-300 mt-0 rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/services">
              <li>Services</li>
            </Link>
            <li><Link to='/myreview'>My review</Link></li>
            <li><Link to='/addservice'>Add services</Link></li>
            <button onClick={handleLogOut}>LogOut</button>
          </ul>
        </div>

        <Link to="/" className="flex items-center">
          <img className="w-12 h-12  ml-10" src={Img} alt="" />
          <p className="text-4xl font-bold ml-3 p-4">Swift Delivery</p>
        </Link>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        {user?.email ? (
          <>
           <Link
            className="bg-orange-400 px-3 text-3xl rounded-lg py-1 text-white ml-3"
            to="/services"
          >
            Services
          </Link>
            <Link to='/myreview' className="bg-orange-400 px-3 text-3xl rounded-lg py-1 text-white ml-3">
              My review
            </Link>
            <Link to='/addservice' className="bg-orange-400 px-3 text-3xl rounded-lg py-1 text-white ml-3">
              Add services
            </Link>
            <Link to='/blogs' className="bg-orange-400 px-3 text-3xl rounded-lg py-1 text-white ml-3"> Blogs</Link>
          </>
        ) : (
         <>
          <Link
            className="bg-orange-400 px-3 text-3xl rounded-lg py-1 text-white mr-8"
            to="/services"
          >
            Services
          </Link>
          <Link to='/blogs' className="bg-orange-400 px-3 text-3xl rounded-lg py-1 text-white"> Blogs</Link>
         </>
        )}
        <Toaster/>
      </div>
    {
      user?.email?
      <div className="navbar-end">
      <button onClick={handleLogOut} className="btn bg-orange-400 border-0">logout</button>
      </div>
      :
      <>
     </>
    }
      
    </div>
  );
};

export default Header;
