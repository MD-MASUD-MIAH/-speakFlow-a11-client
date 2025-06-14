
import { useLoaderData } from 'react-router';
import { useReactTable,getCoreRowModel,flexRender,getSortedRowModel } from '@tanstack/react-table';
import { Link } from 'react-router'; 
import { DateTime } from 'luxon';
import { useState } from 'react';
import { PageName } from './PageName';
const Featured = () => {

    const topTen = useLoaderData() 

   PageName('Featured')
    const columns =[
      {
        header:'No',
        accessorKey:'index',
        cell:(info)=><p>{info.row.index + 1}</p>

      },
      {
        header:'Image',
        accessorKey:'image',
          cell: info => (
    <>
    
      <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                 <img
        src={info.getValue()}
        alt="Thumbnail"
        className=""
      />
              </div>
            </div>
    </div>
    </>
    ),
      },

       {
        header:'Title',
        accessorKey:'title' ,

      },
       {
        header:'Adding Date',
        accessorKey:'addedTime' ,
        cell:info=>DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)
      },
      {
        header:'Description',
        accessorKey:'longDesc',
        cell:info=><div><p className='max-w-full md:max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap'>{info.getValue().slice(0,200)}</p> </div>
      },
       {
        header:'Details',
        accessorKey:'_id',
        cell:info=><div>  <Link to={`/details/${info.getValue()}`} className="btn tom-btn">
              Details
            </Link> </div>
      }
    ]

  const [sort,setSorting] = useState([])
const table = useReactTable({data:topTen,columns,getCoreRowModel:getCoreRowModel(),getSortedRowModel:getSortedRowModel(),state:{sorting:sort},onSortingChange:setSorting})
    
    return (
        <div className='w-11/12 mx-auto overflow-x-auto '>
             <div>
                  <h1 className="text-center font-bold text-xl md:text-4xl pt-10 uppercase ">
      Top 10 Blogs
      </h1>
      <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
    Discover some of the world’s most inspiring and influential blogs. From tech trends and personal growth  
        <br /> <span className='hidden md:block'> to movies and money and creative ideas to explore and enjoy.</span>
      </p>
             </div>





<table className='table mb-10'> 
  

  <thead> 
{table.getHeaderGroups().map((headerGroup,index)=><tr key={index}>{headerGroup.headers.map((header,index)=><th className='cursor-pointer' onClick={header.column.getToggleSortingHandler()} key={index}>{flexRender(header.column.columnDef.header,header.getContext())}{
  
  {asc:' unsort',des:' sort'}[header.column.getIsSorted()?? null]
  
  }</th>)}</tr>)}
   
  </thead> 
  <tbody>
   {table.getRowModel().rows.map((row,index)=><tr key={index}>{row.getVisibleCells().map((cell,index)=><td key={index}>{flexRender(cell.column.columnDef.cell,cell.getContext())}</td>)}</tr>)}
  </tbody>
</table>

        </div>
    );
};

export default Featured;