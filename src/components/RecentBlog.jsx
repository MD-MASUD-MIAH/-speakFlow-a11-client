import Blogs from "./Blogs";
import Leftside from "./Leftside";
import RightSide from "./RightSide";

const RecentBlog = ({ allBlogs }) => {
  return (
    <div className="w-11/12 mx-auto py-1 ">
      <h1 className="text-center font-bold text-4xl pt-10 uppercase ">
        Latest Blog
      </h1>
      <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
        Stay updated with our freshest content! Explore insightful articles,
        expert tips,
        <br /> and the latest trends across tech, lifestyle, and more.{" "}
      </p>

      <div className="grid gap-4 grid-cols-12">
        <aside className="col-span-3"><RightSide></RightSide></aside>

        <aside className="grid grid-cols-1 col-span-6  gap-8">
          {allBlogs?.slice(0, 6)?.map((res) => (
            <Blogs key={res._id} res={res}></Blogs>
          ))}
        </aside>

        <aside className="col-span-3 sticky top-2 h-fit">
          <Leftside></Leftside>
        </aside>
      </div>
    </div>
  );
};

export default RecentBlog;
