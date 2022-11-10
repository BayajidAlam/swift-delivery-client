import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/Login.jpg";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("Login");

  const { SignInUser, signInWithGoogle, loading } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //----------------------------------//
    // sign in user
    SignInUser(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        // get jwt token
        fetch("https://swift-delivery-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("swift-token", data.token);
            console.log(data.token);
          });
        toast.success("User log in successfully!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  //----------------------------------//

  //------------------------------------//
  // sign in with google
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign in Successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  //-----------------------------------//

  //-------------------------------//
  // spinner when loading
  if (loading) {
    return (
      <div className="h-[700px]">
        <div className="h-10 w-10 mx-auto mt-10 mb-4" role="status">
          <svg
            aria-hidden="true"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            ></path>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            ></path>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  //----------------------------------------------------///

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
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p>
                    Don't have account?
                    <Link className="text-indigo-400" to="/signup">
                      Sign Up
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <div className="text-center ">
                  <p className="text-indigo-400 my-2 text-xl">
                    Or Sign In with
                  </p>
                  <div className="flex justify-center ">
                    <FaGoogle
                      onClick={handleSignInWithGoogle}
                      className="text-3xl mr-4"
                    />
                    <FaFacebook className="text-3xl" />
                  </div>
                </div>
              </div>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
