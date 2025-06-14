import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { use } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { PageName } from "./PageName";

const BlogsDeatils = () => {
  //  const [comment,setComment] =useState([])
  const blog = useLoaderData();
  const { user } = use(AuthContext);

  PageName("Details");

  const handlecomment = (e) => {
    e.preventDefault();

    const comment = e.target.comment.value;
    const blogId = blog._id;
    const commenterEmail = user.email;
    const photo = user.photoURL;
    const userName = user.displayName;

    const commentData = {
      blogId,
      comment,
      commenterEmail,
      photo,
      userName,
      createdAt: new Date(), // optional
    };

    e.target.reset();

    axios
      .post(
        "https://blogsite-b11a11-server-j3obpeo7m-md-masud-miahs-projects.vercel.app/comment",
        commentData
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const {
    isPending,
    isError,
    error,
    data: comment,
  } = useQuery({
    queryKey: ["comment", blog._id],
    refetchInterval: 1000,
    refetchOnWindowFocus: true,
    queryFn: async () => {
      const res = await fetch(
        `https://blogsite-b11a11-server-j3obpeo7m-md-masud-miahs-projects.vercel.app/comment/${blog._id}`
      );
      console.log("reunnnnn");

      return res.json();
    },
  });

  if (isPending) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  // useEffect(()=>{

  //     axios.get(`https://blogsite-b11a11-server-j3obpeo7m-md-masud-miahs-projects.vercel.app/comment/${blog._id}`).then(res=>{

  //         if(res.data){

  //         setComment(res.data)
  //         }

  //     }).catch(error=>{

  //         console.log(error);

  //     })
  // },[blog,setComment])

  // console.log(comment);

  return (
    <div className="w-11/12 mx-auto overflow-x-hidden">
      <div>
        <h1 className="text-center font-bold text-xl md:text-4xl pt-10 uppercase ">
          Read Full Blog
        </h1>
        <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
          Read the complete blog post below, explore the details, and discover
          insights,
          <br /> tips, and stories directly from the author.
        </p>
      </div>

      <div className="  p-4 md:py-10  ">
        <div className="border grid grid-cols-1 gap-20  justify-center items-center  border-gray-400 rounded-2xl p-5 md:p-10">
          <div className="  ">
            <img
              className="rounded-2xl  w-full md:h-150"
              src={blog.image}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-3xl sylefont">{blog.title}</h1>

            <div>
              <div className="space-y-4">
                <div className="flex ">
                  <span className="font-normal min-w-[100px]  md:min-w-[200px]">
                    Category{" "}
                  </span>
                  <h1 className="font-bold">{blog.category}</h1>
                </div>
                <div className="flex">
                  <span className="font-normal hidden md:block min-w-[100px]  md:min-w-[200px]">
                    {" "}
                    Post Date{" "}
                  </span>
                  <span className="font-normal min-w-[100px] md:hidden block md:min-w-[200px]">
                    {" "}
                    Post Date
                  </span>
                  <h1 className="font-bold">{blog.addedTime}</h1>
                </div>
                <div className="flex">
                  <span className="font-normal hidden md:block min-w-[100px]  md:min-w-[200px]">
                    {" "}
                    Author :
                  </span>
                  <span className="font-normal min-w-[100px] md:hidden block md:min-w-[200px]">
                    {" "}
                    Last Date:
                  </span>
                  <h1 className="font-bold">{blog.userName} </h1>
                </div>
              </div>

              <div></div>
            </div>

            <p className="  text-[14px]">{blog.shortDesc}</p>
            <p className="  text-[14px]">{blog.longDesc}</p>
          </div>

          <div>
            <div className="flex flex-col">
              {comment?.map((res) => (
                <div key={res._id} res={res}>
                  <div className="flex gap-4 text-xs items-center mb-5">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={res.photo}
                      alt=""
                    />
                    <div>
                      <h1 className="font-bold">{res.userName}</h1>
                      <p>{res.comment}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div>
                {user.email === blog.email ? (
                  <div className="space-y-2">
                    <h1 className=" font-bold md:text-xl">
                      Commenting on your own blog is not allowed.
                    </h1>
                    <Link to={`/update/${blog._id}`} className="btn tom-btn">
                      Update
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handlecomment}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      name="comment"
                      placeholder="comment here"
                      className="input input-neutral"
                    />
                    <button className="tom-btn">comment</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDeatils;
