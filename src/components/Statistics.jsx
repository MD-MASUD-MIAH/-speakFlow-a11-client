import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaMessage, FaUsersBetweenLines } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
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

  const chartData = [
    { name: "Blogs", value: data.blogs },
    { name: "Subscribes", value: data.subscribers },
    { name: "Comments", value: data.comments },
  ];

  // Colors for the bars
  const colors = ["#550527", "#10b981", "#3b82f6"];
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6 ">Dashboard Statistics</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Total Blogs Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-50 text-[#550527] mr-4">
              <FiBookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{data.blogs}</p>
              <p className="text-gray-500">Total Blogs</p>
            </div>
          </div>
        </div>

        {/* Total Subscribes Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-emerald-50 text-emerald-600 mr-4">
              <FaUsersBetweenLines className="w-6 h-6" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {data.subscribers}
              </p>
              <p className="text-gray-500">Total Subscribes</p>
            </div>
          </div>
        </div>

        {/* Total Comments Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
              <FaMessage className="w-6 h-6" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {data.comments}
              </p>
              <p className="text-gray-500">Total Comments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Distribution Overview
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
                }}
                layout="vertical" // Horizontal or vertical layout
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280" }}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280" }}
                  width={80}
                />
                <Tooltip
                  cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                  contentStyle={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar
                  dataKey="value"
                  radius={[0, 4, 4, 0]} // Only round right corners
                  barSize={30} // Adjust bar thickness
                  background={{ fill: "#f3f4f6", radius: 4 }} // Add background
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                      strokeWidth={0}
                    />
                  ))}
                  <LabelList
                    dataKey="value"
                    position="right"
                    formatter={(value) => `${value}`}
                    fill="#374151"
                    style={{ fontSize: "0.875rem" }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Percentage Breakdown
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}`, "Count"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
