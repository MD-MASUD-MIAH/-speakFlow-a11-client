import React, { use } from 'react';

import { AuthContext } from '../context/AuthContext';
import { useLoaderData } from 'react-router';
import axios from 'axios';

const Update = () => {

    const blog = useLoaderData()

    const handleupdate =(e)=>{

e.preventDefault()

 const frm = e.target;

    const plant = new FormData(frm);

    const blogUpdate = Object.fromEntries(plant.entries());


 axios.put(`http://localhost:4000/blogs/${blog._id}`,blogUpdate).then(res=>{

  console.log(res.data);
  
 }).catch(error=>{

  console.log(error);
  
 })
 
 

    }

    const {user} =use(AuthContext)
    return (
        <div>
           <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Create New Blog</h2>
      <form onSubmit={handleupdate} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
          
            type="text"
            name="title"
            defaultValue={blog.title}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter blog title"
            required
          />
        </div>



        <div>
          <label className="block mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={blog.image}
            className="w-full border px-3 py-2 rounded"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <select
            name="category"
            defaultValue={blog.category}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select category</option>
            <option value="technology">Technology</option>
            <option value="travel">Travel</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="food">Food</option>
            <option value="education">Education</option>
          </select>
        </div>

         <div>
          <label className="block mb-1">Added date</label>
          <input
            type="date"
            name="addedTime"
           defaultValue={blog.addedTime}
            className="w-full border px-3 py-2 rounded"
            placeholder="Your email"
            required
          />
        </div>

   <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="w-full border px-3 py-2 rounded"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Short Description</label>
          <textarea
            name="shortDesc"
            className="w-full border px-3 py-2 rounded"
            rows="2"
              defaultValue={blog.shortDesc}
            placeholder="A short summary..."
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1">Long Description</label>
          <textarea
            name="longDesc" 
          defaultValue={blog.longDesc}
            className="w-full border px-3 py-2 rounded"
            rows="6"
            
            placeholder="Full blog content..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-5 py-2 rounded font-semibold"
        >
          Submit Blog
        </button>
      </form>
    </div>
        </div>
    );
};

export default Update;