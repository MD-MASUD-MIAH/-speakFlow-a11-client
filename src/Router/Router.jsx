import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AllBlogs from "../components/AllBlogs";
import AddBlogs from "../components/AddBlogs";
import Wishlist from "../components/Wishlist";
import Featured from "../components/Featured";
import Login from "../components/Login";
import Register from "../components/Register";


export const  router = createBrowserRouter([

      
    {path:'/', Component:Root, children:[


        {index: true, Component:Home},
        {path:'/allblogs' ,Component:AllBlogs},
        {path:'/addblog', Component:AddBlogs},
        {path:'/wishlist', Component:Wishlist},
        {path:'/featuredblog',Component:Featured},
        {path:'/login',Component:Login},
        {path:'/register',Component:Register}
       
    ]},
]) 