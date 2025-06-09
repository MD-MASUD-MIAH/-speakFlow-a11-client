import React from 'react';
import Banner from '../components/Banner';
import RecentBlog from '../components/RecentBlog';
import { useLoaderData } from 'react-router';


const Home = () => {

    const allBlogs = useLoaderData() 

   
    
    return (
        <div>
           <Banner></Banner>
       
               <RecentBlog allBlogs={allBlogs}></RecentBlog>
      
        </div>
    );
};

export default Home;