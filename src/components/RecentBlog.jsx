import Blogs from "./Blogs";
import Leftside from "./Leftside";
import RightSide from "./RightSide";

const RecentBlog = ({ allBlogs }) => {
  return (
    <div className="w-11/12 mx-auto py-1 ">
    

      <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
        <aside className="md:col-span-3 order-2 md:order-1 ">
          <RightSide></RightSide>
        </aside>

      <div className=" md:col-span-6 order-1 md:order-2 "> 

          <h1 className="text-center font-bold text-4xl pt-10 uppercase ">
        Latest Blog
      </h1>
      <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
        Stay updated with our freshest content! Explore insightful articles,
        expert tips,
        <br /> and the latest trends across tech, lifestyle, and more.{" "}
      </p>
        {

            <aside className="grid grid-cols-1  gap-8">
          {allBlogs?.slice(0, 6)?.map((res) => (
            <Blogs key={res._id} res={res}></Blogs>
          ))}
        </aside>
        }
      </div>

        <aside className="  md:col-span-3 order-3 ">
          <Leftside></Leftside>
        </aside>
      </div>
    </div>
  );
};

export default RecentBlog;
