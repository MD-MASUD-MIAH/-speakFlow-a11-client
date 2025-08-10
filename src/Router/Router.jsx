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
import DashboardLayout from "../Root/DashboardLayout";
import Statistics from "../components/Statistics";
import MyBlogs from "../components/MyBlogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,

        loader: () => fetch("http://localhost:4000/blogs"),
        Component: Home,
      },
      {
        path: "/allblogs",

        Component: AllBlogs,
      },
      
     
      {
        path: "/featuredblog",
        loader: () => fetch("http://localhost:4000/topTen"),
        Component: Featured,
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/details/:id",

        loader: ({ params }) =>
          fetch(`http://localhost:4000/blogs/${params.id}`),
        element: <BlogsDeatils></BlogsDeatils>,
      },

      {
        path: "/update/:id",

        loader: ({ params }) =>
          fetch(`http://localhost:4000/blogs/${params.id}`),
        element: (
          <PiriveateRoute>
            <Update></Update>
          </PiriveateRoute>
        ),
      },
    ],
  },
  {
    path:'/dashboard', element:<PiriveateRoute><DashboardLayout></DashboardLayout></PiriveateRoute>,children:[

      {index:true , element:<PiriveateRoute><Statistics></Statistics></PiriveateRoute>},
      {path:'addblog', element:<PiriveateRoute><AddBlogs></AddBlogs></PiriveateRoute>},
      {
        path: "wishlist",
        element: (
          <PiriveateRoute>
            <Wishlist></Wishlist>
          </PiriveateRoute>
        ),
      },
      {path:'myblogs',  element:<PiriveateRoute><MyBlogs></MyBlogs></PiriveateRoute>}
    ]
  }
]);
