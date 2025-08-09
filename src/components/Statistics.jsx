import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";

const Statistics = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["statsCount"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/statsCount");
      return res.data; // { blogs: 42, subscribers: 15 }
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }
  return (
    <div className="flex justify-center gap-8 p-6 bg-gray-100 rounded-md">
      <div className="text-center">
        <h2 className="text-2xl font-bold">{data.blogs}</h2>
        <p className="text-gray-600">Total Blogs</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{data.subscribers}</h2>
        <p className="text-gray-600">Total Subscribers</p>
      </div>
    </div>
  );
};

export default Statistics;
