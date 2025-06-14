import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import AddBlogs from "../components/AddBlogs";
import AllBlogs from "../components/AllBlogs";
import BlogsDeatils from "../components/BlogsDeatils";
import Error from "../components/Error";
import Featured from "../components/Featured";
import Loader from "../components/Loader";
import Login from "../components/Login";
import Register from "../components/Register";
import Update from "../components/Update";
import Wishlist from "../components/Wishlist";
import PiriveateRoute from "../context/PiriveateRoute";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,

        loader: () => fetch("https://blogsite-b11a11-server.vercel.app/blogs"),
        Component: Home,
      },
      {
        path: "/allblogs",

        Component: AllBlogs,
      },
      {
        path: "/addblog",
        element: (
          <PiriveateRoute>
            <AddBlogs></AddBlogs>
          </PiriveateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PiriveateRoute>
            <Wishlist></Wishlist>
          </PiriveateRoute>
        ),
      },
      {
        path: "/featuredblog",
        loader: () => fetch("https://blogsite-b11a11-server.vercel.app/topTen"),
        Component: Featured,
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/details/:id",

        loader: ({ params }) =>
          fetch(`https://blogsite-b11a11-server.vercel.app/blogs/${params.id}`),
        element: (
          <PiriveateRoute>
            <BlogsDeatils></BlogsDeatils>
          </PiriveateRoute>
        ),
      },

      {
        path: "/update/:id",

        loader: ({ params }) =>
          fetch(`https://blogsite-b11a11-server.vercel.app/blogs/${params.id}`),
        element: (
          <PiriveateRoute>
            <Update></Update>
          </PiriveateRoute>
        ),
      },
    ],
  },
]);
