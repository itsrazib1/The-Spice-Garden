import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Recipes from "../pages/Home/Recipes";
import UserProfile from "../pages/Home/UserProfile";
import Access from "../layout/access";
import Register from "../pages/Access/Register";
import Login from "../pages/Access/Login";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../layout/Error";
import Blogs from "../pages/Home/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/recipes',
        element: <Recipes></Recipes>
      },
      {
        path: '/blogs',
        element:<Blogs/>
      },
      {
        path: '/user-profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://phero-assingment-10-xoxorazibahamed-gmailcom.vercel.app/chefs/${params.id}`)
      }
    ]
  },
  {
    path: 'access',
    element: <Access></Access>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }
]);

export default router;