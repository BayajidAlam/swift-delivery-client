import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/signup.jpg'
import { AuthContext } from '../../Context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

  const { handleSignup } = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value 
    const email =form.email.value
    const password = form.password.value 

    // create user 
    handleSignup(email,password)
    .then(result=>{
      const user = result.user
      console.log(user)
      toast.success('User created successfully!')
    })
    .catch((error)=>{
      toast.error(error.message)
    })
  }

  return (
    <div className="hero  bg-slate-300 my-3 rounded-lg">

    <div className="hero-content flex-col lg:flex-row">
      
      <div className="text-center lg:text-left w-1/2">
        <img className="w-3/4 mx-auto rounded-lg" src={img} alt="" />
      </div>

      <div className="card w-1/2 h-[550px]  shadow-2xl bg-base-100">
        <div className="card-body w-3/4 mx-auto">
        <p className="text-center text-3xl">Sign Up</p>
      <form onSubmit={handleSubmit}>
        
      <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
  
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
                <p>already have an account?<Link className="text-indigo-400" to='/login'>Sign In</Link></p>
            </label>
          </div>

          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary">Login</button>
            <div className="text-center ">
              <p className="text-indigo-400 my-2">Or Sign In with</p>
             <div className="flex justify-center ">
             <FaGoogle className="text-3xl mr-4"/>
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

export default SignUp;