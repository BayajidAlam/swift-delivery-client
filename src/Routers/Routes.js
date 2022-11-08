import { createBrowserRouter } from "react-router-dom";
import Services from "../Components/Services/Services";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/services',
          element: <Services></Services>
        }
      ]
    }
  
])


export default router