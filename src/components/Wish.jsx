import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const Wish = ({blog,setBlogs,blogs}) => {

      const handleDelte =(id)=>{


        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

 axios.delete(`http://localhost:4000/wishList/${id}`).then(res=>{

    console.log(res.data);

    if(res.data.deletedCount){

        const ramindata = blogs.filter(res=>res._id !== id)

        setBlogs(ramindata)
    }
    
  }).catch(err=>{

    console.log(err);
    
  })

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

 
  

      }
    return (
        <div>

             <div>
              <div  className="p-4 border rounded shadow">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-600">{blog.category}</p> 

            <button onClick={()=>handleDelte(blog._id)} className='btn btn-primary'>Delete</button>
           
          </div>
        </div>
            
        </div>
    );
};

export default Wish;