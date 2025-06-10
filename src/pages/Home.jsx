import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import RecentBlog from "../components/RecentBlog";

const Home = () => {
  const allBlogs = useLoaderData();

  return (
    <div className="">
      <Banner></Banner>

      <RecentBlog allBlogs={allBlogs}></RecentBlog>
    </div>
  );
};

export default Home;
