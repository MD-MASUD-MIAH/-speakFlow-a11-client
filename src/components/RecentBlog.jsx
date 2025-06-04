

import Blogs from "./Blogs";


const RecentBlog = ({ allBlogs }) => {
   
    
 

 
 


 

  return (
    <div className="my-20 w-11/12 mx-auto">
      <h1 className="text-center text-4xl py-10">Recent blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allBlogs?.slice(0, 6)?.map(res => 
         <Blogs key={res._id} res={res}></Blogs>
        )}
      </div>
    </div>
  );
};

export default RecentBlog;
