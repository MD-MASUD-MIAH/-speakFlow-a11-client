import { use } from "react";

import { AuthContext } from '../context/AuthContext';
import axios from "axios";
const AddBlogs = () => {

  const {user} = use(AuthContext)

  const handleSubmit = (e) => {

    
    e.preventDefault();
    const form = e.target;

    const userName = user.displayName 
    const photoURL = user.photoURL
    const newBlog = {
      title: form.title.value,
      image: form.image.value,
      category: form.category.value,
      shortDesc: form.shortDesc.value,
      longDesc: form.longDesc.value,
      addedTime:form.addedTime.value,
      email:form.email.value,
      userName,
      photoURL,
  

    };

    axios.post('http://localhost:4000/blogs', newBlog).then(res=>{

      console.log(res.data);
      
    }).catch(error=>{

      console.log(error);
      
    })

    console.log(newBlog);
    // You can send this to your backend or Firebase
  };

  const reatime = new Date().toISOString().split("T")[0]

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            defaultValue='The Future of Artificial Intelligence'
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
            defaultValue='https://i.ibb.co/XZP6ntLJ/technology.jpg'
            className="w-full border px-3 py-2 rounded"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <select
            name="category"
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
            defaultValue={reatime}
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
            defaultValue={user.email}
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
              defaultValue='How AI is shaping the future of industries and daily life.'
            placeholder="A short summary..."
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1">Long Description</label>
          <textarea
            name="longDesc" 
          defaultValue='Artificial Intelligence is rapidly transforming the world. From autonomous vehicles to personalized recommendations, the potential of AI is endless. This blog explores the current trends, challenges, and future directions of AI technology.'
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
  );
};

export default AddBlogs;
