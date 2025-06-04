import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Wish from './wish';

const Wishlist = () => {
    const{user} = use(AuthContext)
const [blogs, setBlogs] = useState([]);

     useEffect(() => {

   
    
    axios(`http://localhost:4000/my-wishList/${user?.email}`)
      .then((data) => {
       
        setBlogs(data?.data); 

        
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
    return (
        <div>
            <h1>I am wishlist</h1> 

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
             {

                blogs.map(blog=><Wish key={blog._id} blogs={blogs} setBlogs={setBlogs} blog={blog}></Wish>)
            }
           </div>
        </div>
    );
};

export default Wishlist;