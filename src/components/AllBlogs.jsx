import { useEffect, useState } from "react";
import BlogsAll from "./BlogsAll";
import { PageName } from "./PageName";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  PageName('All Blog')
  useEffect(() => {
    const url = category
      ? `http://localhost:4000/allBlogs?category=${category}`
      : `http://localhost:4000/allBlogs`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [category]);

  useEffect(() => {
    const url = title
      ? `http://localhost:4000/search?title=${title}`
      : `http://localhost:4000/search`;

    fetch(url)
      .then((res) => res.json())
      .then((data) =>{

        setBlogs(data)
      } );
  }, [title]);

  // const hadleser =(e)=>{

  //   e.preventDefault()

  //   const text = e.target.value
  //   setTitle(text)
  // }

  return (
    <div className="w-11/12 mx-auto py-6">
      <div>
        <div className="flex flex-col gap-10 md:flex-row items-center justify-between py-6">
          <div className="flex gap-2 items-center w-full">
            <h1 className=" font-semibold">
              <span className="block md:hidden">Filter  </span>
             <span className="hidden md:block">  Filter by Category :</span>
            </h1>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border px-3 py-1 rounded select select-primary border-[#550527]"
            >
              <option value="">All</option>

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

          <div className="flex flex-row-reverse md:flex-row items-center gap-4 md:w-[50%] ">
            <input
              type="search"
              value={title}
              name="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type here"
              className="input w-full border-[#550527]"
            />

            <button type="submit" className="tom-btn">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.map((blog) => (
          <BlogsAll key={blog._id} blog={blog}></BlogsAll>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
