import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';
import axios from 'axios';

const BlogsAll = ({blog}) => {

    const {user} = use(AuthContext) 
   const {_id} = blog

const handleWish = () => {
  const orderInfo = {
    wishId: _id, 
    wisherEmail: user?.email,
  };

  axios.post(`http://localhost:4000/place-wishList`, orderInfo)
    .then((res) => {
      console.log('Order placed:', res.data);
    
    })
    .catch((err) => {
      console.error('Error placing order:', err);
    });
};


    return (
        <div>
              <div  className="p-4 border rounded shadow">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-600">{blog.category}</p> 

            <button onClick={handleWish} className='btn btn-primary'>WishList</button>
              <Link to={`/details/${_id}`}  className="btn btn-primary">Details</Link>
          </div>
        </div>
    );
};

export default BlogsAll;