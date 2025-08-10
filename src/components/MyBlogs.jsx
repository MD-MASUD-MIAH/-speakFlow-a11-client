import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DateTime } from "luxon";
import { Link } from "react-router";
import useAxiosSecure from "../hook/useAxiosSecure";

const MyBlogs = () => {
  const { user } = use(AuthContext);
  const [blogs, setBlogs] = useState([]);

  console.log("data", blogs);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/myBlogs?email=${user.email}`)
        .then((res) => setBlogs(res.data))
        .catch((err) => console.error(err));
    }
  }, [user?.email, axiosSecure]);

  const columns = [
    {
      header: "No",
      accessorKey: "index",
      cell: (info) => <p>{info.row.index + 1}</p>,
    },
    {
      header: "Image",
      accessorKey: "image",
      cell: (info) => (
        <>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={info.getValue()} alt="Thumbnail" className="" />
              </div>
            </div>
          </div>
        </>
      ),
    },

    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "Adding Date",
      accessorKey: "addedTime",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
    {
      header: "Description",
      accessorKey: "longDesc",
      cell: (info) => (
        <div>
          <p className="max-w-full md:max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap">
            {info.getValue().slice(0, 200)}
          </p>{" "}
        </div>
      ),
    },
    {
      header: "Details",
      accessorKey: "_id",
      cell: (info) => (
        <div>
          {" "}
          <Link to={`/details/${info.getValue()}`} className="btn tom-btn">
            Details
          </Link>{" "}
        </div>
      ),
    },
  ];

  const [sort, setSorting] = useState([]);
  const table = useReactTable({
    data: blogs,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting: sort },
    onSortingChange: setSorting,
  });

  return (
<div>
    {blogs.length  === 0 ?  <div className="h-[calc(100vh-300px)] w-full flex items-center justify-center px-4">
            <div className="text-center py-10">
              <h1 className="text-2xl font-semibold mb-4">
                Your blogs is empty!
              </h1>
              <p className=" mb-6">
                You haven't added anything yet. Start exploring and add blogs.
              </p>
              <Link to="/dashboard/addblog" className="inline-block tom-btn">
                Add a Blog Now
              </Link>
            </div>
          </div>: <div className="w-11/12 mx-auto overflow-x-auto ">
      <div>
        <h1 className="text-center font-bold text-xl md:text-4xl pt-10 uppercase ">
          My Blogs
        </h1>
        <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
          Your personal hub for all the content you’ve created. Here, you can
          browse through your published articles,
          <br />{" "}
          <span className="hidden md:block mt-2">
            {" "}
            review drafts, and keep track of your writing journey.
          </span>
        </p>
      </div>

   <table className="table mb-10">
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr key={index}>
              {headerGroup.headers.map((header, index) => (
                <th
                  className="cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                  key={index}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {
                    { asc: " unsort", des: " sort" }[
                      header.column.getIsSorted() ?? null
                    ]
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
       
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr key={index}>
                {row.getVisibleCells().map((cell, index) => (
                  <td key={index}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        
      </table>
    </div>}
</div>
  );
};

export default MyBlogs;
