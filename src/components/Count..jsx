import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { use } from "react";
import CountUp from "react-countup";
import { FaMicroblog } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { GrFormView, GrGroup } from "react-icons/gr";
import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";
const Count = () => {
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

  const { isDark } = use(AuthContext);
  return (
    <div className="py-10 overflow-x-hidden">
      <div>
        <h1 className="text-center font-bold text-xl md:text-4xl pt-10 uppercase ">
          We Provide Best Blogs experience
        </h1>
        <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
          We provide the best blogging experience for both writers and readers.
          distraction-free reading interface,
          <br />{" "}
          <span className="hidden md:block">
            Whether you're here to write, read, or do both — you're in the right
            place.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          className={`card  border-1 ${
            isDark ? "border-white" : "border-[#550527]"
          }  card-xl shadow-sm `}
        >
          <div className="card-body gap-6">
            <div>
              <FaMicroblog size={40}></FaMicroblog>
            </div>
            <h1 className="font-bold text-3xl ">
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={0}
                suffix="+"
                end={data.blogs}
                duration={10}
              ></CountUp>
            </h1>
            <div className="justify-start card-actions">
              <p className="text-xl ">Total Blog</p>
            </div>
          </div>
        </div>

        <div
          className={`card  border-1 ${
            isDark ? "border-white" : "border-[#550527]"
          }  card-xl shadow-sm `}
        >
          <div className="card-body gap-6">
            <div>
              <GoCodeReview size={40}></GoCodeReview>
            </div>
            <h1 className="font-bold text-3xl">
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={0}
                suffix="+"
                end={data.comments}
                duration={5}
              ></CountUp>
            </h1>
            <div className="justify-start card-actions">
              <p className="text-xl ">Review</p>
            </div>
          </div>
        </div>

        <div
          className={`card  border-1 ${
            isDark ? "border-white" : "border-[#550527]"
          }  card-xl shadow-sm `}
        >
          <div className="card-body gap-6">
            <div>
              <GrGroup size={40}></GrGroup>
            </div>
            <h1 className="font-bold text-3xl ">
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={0}
                suffix="+"
                end={data.subscribers}
                duration={15}
              ></CountUp>
            </h1>
            <div className="justify-start card-actions">
              <p className="text-xl">Active Member</p>
            </div>
          </div>
        </div>

        <div
          className={`card  border-1 ${
            isDark ? "border-white" : "border-[#550527]"
          }  card-xl shadow-sm `}
        >
          <div className="card-body gap-6">
            <div>
              <GrFormView size={40}></GrFormView>
            </div>
            <h1 className="font-bold text-3xl ">
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={0}
                suffix="+"
                end={500}
                duration={15}
              ></CountUp>
            </h1>
            <div className="justify-start card-actions">
              <p className="text-xl ">Daily Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
