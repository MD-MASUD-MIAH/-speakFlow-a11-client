import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AllBlogs from "../components/AllBlogs";
import AddBlogs from "../components/AddBlogs";
import Wishlist from "../components/Wishlist";
import Featured from "../components/Featured";
import Login from "../components/Login";
import Register from "../components/Register";
import PiriveateRoute from "../context/PiriveateRoute";
import BlogsDeatils from "../components/BlogsDeatils";
import Update from "../components/Update";



export const  router = createBrowserRouter([

      
    {path:'/', Component:Root, errorElement:<h1>Error khaisoo mama 404</h1>,children:[


        {index: true,
            
            loader:()=>fetch('http://localhost:4000/blogs'),
            Component:Home},
        {path:'/allblogs', 
            
            Component:AllBlogs},
        {path:'/addblog', element:<PiriveateRoute><AddBlogs></AddBlogs></PiriveateRoute>},
        {path:'/wishlist', element:<PiriveateRoute><Wishlist></Wishlist></PiriveateRoute>},
        {path:'/featuredblog',
            loader:()=>fetch('http://localhost:4000/topTen'),
            Component:Featured},
        {path:'/login',Component:Login},
        {path:'/register',Component:Register},
        {path:'/details/:id',
           
            loader:({params})=>fetch(`http://localhost:4000/blogs/${params.id}`),
            element:<PiriveateRoute><BlogsDeatils></BlogsDeatils></PiriveateRoute>
        },
       
        {path:'/update/:id',

              loader:({params})=>fetch(`http://localhost:4000/blogs/${params.id}`),
            element:<PiriveateRoute><Update></Update></PiriveateRoute>
        }
       
    ]},
]) 