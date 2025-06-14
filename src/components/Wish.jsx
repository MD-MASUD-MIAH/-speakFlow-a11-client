import axios from "axios";
import { Link } from "react-router";
import Swal from "sweetalert2";


const Wish = ({ blog, setBlogs, blogs }) => {

  

  const handleDelte = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://blogsite-b11a11-server-j3obpeo7m-md-masud-miahs-projects.vercel.app/wishList/${id}`)
          .then((res) => {
          

            if (res.data.deletedCount) {
              const ramindata = blogs.filter((res) => res._id !== id);

              setBlogs(ramindata);
            }
          })
          .catch((err) => {
            console.log(err);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
     <div>
        <div className="p-4 border rounded shadow">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-40 object-cover mb-2  rounded-bl-2xl rounded-tr-2xl"
          />
          <h3 className="text-lg font-bold">{blog.title}</h3>
          <p className="text-sm text-gray-600">{blog.addedTime}</p>

          <div className="flex justify-between gap-4">
            <h1 className="text-2xl font-bold">{blog.category}</h1>
            <div className="flex gap-4">
              <Link to={`/details/${blog.wishId}`} className="btn btn-primary tom-btn">
                Details
              </Link>
              <button
                onClick={() => handleDelte(blog._id)}
                className="btn tom-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;
