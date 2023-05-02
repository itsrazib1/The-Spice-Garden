import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Recipes from "../Pages/Recipes/Recipes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch('https://server-spice-garden-xoxorazibahamed-gmailcom.vercel.app/chefs')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/recipes/:id",
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({params})=>fetch(`https://server-spice-garden-xoxorazibahamed-gmailcom.vercel.app/recipes/${params.id}`)
      }
    ],
  },
]);

export default router;
