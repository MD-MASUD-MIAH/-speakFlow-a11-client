import React from 'react';
import { useLoaderData } from 'react-router';

const BlogsDeatils = () => {

    const blog = useLoaderData() 

    
    return (
        <div>
            <img src={blog.image} alt="" />
            <h1>Yes I am blogs details</h1>
        </div>
    );
};

export default BlogsDeatils;