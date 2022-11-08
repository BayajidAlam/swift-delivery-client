import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/Login.jpg'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

  const { SignInUser, signInWithGoogle } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email =form.email.value
    const password = form.password.value 
    console.log(email,password)
    // sign in user 
    SignInUser(email,password)
    .then(result =>{
      const user = result.user 
      console.log(user);
      toast.success('User log in successfully!')
    })
    .catch(error=>{
    const errorMessage = error.message;
      toast.error(errorMessage)
    })
  }
  // sign in with google 
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user 
      console.log(user);
      toast.success('Sign in Successfully!')
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }
   

  return (
    <div className="hero  bg-slate-300 my-3 rounded-lg">

      <div className="hero-content flex-col lg:flex-row">
        
        <div className="text-center lg:text-left w-1/2">
          <img className="w-3/4 mx-auto rounded-lg" src={img} alt="" />
        </div>

        <div className="card w-1/2 h-[450px]  shadow-2xl bg-base-100">
          <div className="card-body w-3/4 mx-auto">
          <p className="text-center text-3xl">Login</p>
         <form onSubmit={handleSubmit}>
           
         <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
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
                required
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
               <FaGoogle onClick={handleSignInWithGoogle} className="text-3xl mr-4"/>
                <FaFacebook className="text-3xl"/>
               </div>
              </div>
            </div>
         </form>
         <Toaster/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
