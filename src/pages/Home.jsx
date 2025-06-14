import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import RecentBlog from "../components/RecentBlog";
import { PageName } from "../components/PageName";

const Home = () => {
  const allBlogs = useLoaderData();
 PageName("Home")
  return (
    <div className="">
      
      <Banner></Banner>

      <RecentBlog allBlogs={allBlogs}></RecentBlog>
    </div>
  );
};

export default Home;
