import { use } from "react";

import { AuthContext } from '../context/AuthContext';
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddBlogs = () => {


  const navigate = useNavigate()
  const {user} = use(AuthContext)

  const handleSubmit = (e) => {

    
    e.preventDefault();
    const form = e.target;

    
    const photoURL = user.photoURL
    const newBlog = {
      title: form.title.value,
      image: form.image.value,
      category: form.category.value,
      shortDesc: form.shortDesc.value,
      longDesc: form.longDesc.value,
      addedTime:form.addedTime.value,
      email:form.email.value, 
      userName:form.userName.value,
      photoURL,
  

    };


    
    axios.post('http://localhost:4000/blogs', newBlog).then(res=>{

      console.log(res.data);
      navigate('/')
      Swal.fire({
  title: "Blog Added Success!",
  icon: "success",
  draggable: true
});
     
    }).catch(error=>{

      console.log(error);
      
    })

    console.log(newBlog);
  e.target.reset() 

  };

  const realtime = new Date().toISOString().split("T")[0]

  return (
   <div className="py-20">
    









     <div className="md:max-w-5xl mx-auto border border-[#550527] rounded p-6 shadow ">
        <h2 className="text-3xl font-bold  mb-6 ">Create New Blog</h2>
        <form
           onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <div>
            <label className="  text-sm font-medium mb-1">Blog Title</label>
            <input
             name="title"
              type="text" 
              defaultValue='Education: A Path to Growth and Success'
              placeholder="blog title"
              className="input input-bordered w-full"
            />
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">PhotoURL</label>
            <input
             name="image"
              type="text" 
              defaultValue={'https://i.ibb.co/fzDCf1bP/books-stack-3d-illustration-isolated-background.jpg'}                                  
              placeholder="enter photo url"
              className="input input-bordered w-full"
            />
          </div>

        

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select name="category" className="select select-bordered w-full">
             <option value="technology">Technology</option>
            <option value="travel">Travel</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="food">Food</option>
            <option value="education">Education</option>
            <option value="personalDevelopment">Personal Development</option>
            <option value="entertainment">Entertainment</option>
            <option value="health&fitness">Health & Fitness</option>
            </select>
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">User Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="input input-bordered w-full"
            />
          </div>

           <div>
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              name="userName"
              value={user.displayName}
              type="text"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">
            Added Date
            </label>
            <input
              name="addedTime"
               defaultValue={realtime}
              type="date"
              id="date"
             
              className="input input-bordered w-full"
            />
          </div>  

          <div>
            <label className="block text-sm font-medium mb-1">
           Short Description
            </label>
            <textarea
                 name="shortDesc"
              defaultValue={`Education is the process of gaining knowledge, skills, and values to develop personally and contribute to society. It happens through schools, experiences, and lifelong learning.`}
              className="textarea textarea-bordered w-full"
              rows="3"
              placeholder="Brief description..."
            ></textarea>
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">
            Long Description
            </label>
            <textarea
               name="longDesc" 
              defaultValue={`Education is a continuous process of learning that helps individuals acquire knowledge, skills, values, and attitudes essential for personal development and active participation in society. It takes place in formal environments like schools and universities, as well as through informal experiences and self-learning.Education shapes the way people think, reason, and interact with the world. It builds critical thinking, creativity, and problem-solving skills, and empowers individuals to achieve their goals, improve their lives, and make meaningful contributions to their communities. A well-educated society promotes progress, innovation, and equality, making education one of the most powerful tools for change.`}
              className="textarea textarea-bordered w-full"
              rows="5"
              placeholder="Brief description..."
            ></textarea>
          </div>

         


          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full tom-btn"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
   </div>
  );
};

export default AddBlogs;
