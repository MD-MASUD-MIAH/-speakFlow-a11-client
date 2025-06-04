import React, { useEffect, useState } from 'react';
import BlogsAll from './BlogsAll';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState(""); 
  const [title,setTitle] = useState(""); 

  useEffect(() => {
    const url = category
      ? `http://localhost:4000/allBlogs?category=${category}`
      : `http://localhost:4000/allBlogs`;

    fetch(url)
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [category]); 



  useEffect(() => {
    const url =title
      ? `http://localhost:4000/search?title=${title}`
      : `http://localhost:4000/search`;

    fetch(url)
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [title]); 

  return (
    <div className="w-11/12 mx-auto py-6">
    
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="">All</option>

            <option value="technology">Technology</option>
            <option value="travel">Travel</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="food">Food</option>
            <option value="education">Education</option>
        </select>
      </div>

<input
  type="search"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  placeholder="Search..."
  className="border px-2 py-1 rounded"
/>

 
      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map(blog => <BlogsAll key={blog._id} blog={blog}></BlogsAll>)}
      </div>
    </div>
  );
};

export default AllBlogs;
