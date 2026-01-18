import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Home";
import NotFoundPage from "../layouts/NotFoundPage";
import RecipeDetails from "../layouts/recipeDetails/RecipeDetails";
import Login from "./login/Login";
import Register from "./register/register";
import BlogPage from "./blogPage/BlogPage";
import PrivateRoute from "./PrivateRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chefs from "./pages/Chefs";
import ChefRecipes from "./pages/ChefRecipes";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/chefs",
        element: <Chefs />,
      },
      {
        path: "/chef-recipes/:id",
        element: <ChefRecipes />,
      },
      {
        path: "/recipes/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
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
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
