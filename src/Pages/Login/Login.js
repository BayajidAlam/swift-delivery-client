import React from "react";
import { Link } from "react-router-dom";
import img from '../../assets/Login.jpg'
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero  bg-slate-300 my-3 rounded-lg">

      <div className="hero-content flex-col lg:flex-row">
        
        <div className="text-center lg:text-left w-1/2">
          <img className="w-3/4 mx-auto rounded-lg" src={img} alt="" />
        </div>

        <div className="card w-1/2 h-[450px]  shadow-2xl bg-base-100">
          <div className="card-body w-3/4 mx-auto">
          <p className="text-center text-3xl">Login</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                  <p>Don't have account?<Link className="text-indigo-400" to='/signup'>Sign Up</Link></p>
              </label>
            </div>
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary">Login</button>
              <div className="text-center ">
                <p className="text-indigo-400 my-2 text-xl">Or Sign In with</p>
               <div className="flex justify-center ">
               <FaGoogle className="text-3xl mr-4"/>
                <FaFacebook className="text-3xl"/>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
