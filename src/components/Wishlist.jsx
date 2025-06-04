import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

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

            {

                blogs.map(res=><div res={res}><img src={res.image} alt="" /></div>)
            }
        </div>
    );
};

export default Wishlist;