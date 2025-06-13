import React from 'react';
import { useLoaderData } from 'react-router';

const WishDeatils = () => {
    const blog = useLoaderData() 

    console.log(blog);
    
    return (
        <div>
            <img src={blog.image} alt="" />
        </div>
    );
};

export default WishDeatils;