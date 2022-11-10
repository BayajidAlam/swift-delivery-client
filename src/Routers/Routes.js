import { createBrowserRouter } from "react-router-dom";
import Services from "../Components/Services/Services";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Error404 from "../Pages/Error404/Error404";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/My review/MyReview";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error404></Error404>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/services',
          element: 
          
            <Services></Services>
          
        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/myreview',
          element: 
          <PrivateRouter>
            <MyReview></MyReview>
          </PrivateRouter>
        },
        {
          path: '/addservice',
          element: 
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path:'/update/:id',
          element: <UpdateReview></UpdateReview>,
          loader:  ({params})=>fetch(`http://localhost:5000/update/${params.id}`)
        }
      ]
    }
  
])


export default router