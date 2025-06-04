import React from 'react';
import { use,} from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";





const Blogs = ({res}) => {
     const {user} = use(AuthContext)
    
   


const {_id} = res

const handleWish = () => {
  const orderInfo = {
    coffeeId: _id, 
    customerEmail: user?.email,
  };

  axios.post(`http://localhost:4000/place-order`, orderInfo)
    .then((res) => {
      console.log('Order placed:', res.data);
    
    })
    .catch((err) => {
      console.error('Error placing order:', err);
    });
};


    return (
        <div>
             <div >
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={res.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{res.title}</h2>
                <p>
                {res.shortDesc}
                </p>
                <div className="card-actions justify-end">
                    <h1>{res.addedTime
}</h1>
                  <Link to={`/details/${res._id}`}  className="btn btn-primary">Details</Link>
                  <button onClick={handleWish} className="btn btn-primary">WishList</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Blogs;