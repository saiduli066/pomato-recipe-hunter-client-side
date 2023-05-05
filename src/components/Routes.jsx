import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Home";
import NotFoundPage from "../layouts/NotFoundPage";
import RecipeDetails from "../layouts/recipeDetails/RecipeDetails";
import Login from "./login/Login";
import Register from "./register/register";
import BlogPage from "./blogPage/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chefs/:id",
        element: <RecipeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-saiduli066.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
        },
        {
            path: '/blog',
            element:<BlogPage/>
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
