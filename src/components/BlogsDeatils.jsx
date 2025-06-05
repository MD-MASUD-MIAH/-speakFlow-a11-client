import React, { use,  } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';

const BlogsDeatils = () => {
  //  const [comment,setComment] =useState([])
    const blog = useLoaderData() 
    const {user} = use(AuthContext)

const handlecomment = (e)=>{

    e.preventDefault() 

  const comment = e.target.comment.value 
  const blogId = blog._id
  const  commenterEmail =user.email 
  const photo  = user.photoURL 
  const userName =user.displayName
   
    const commentData = {
    blogId,
    comment,
    commenterEmail,
    photo,
    userName,
    createdAt: new Date(), // optional
  };



    e.target.reset()

    axios.post('http://localhost:4000/comment',commentData).then(res=>{

        console.log(res.data);
        
    }).catch(error=>{

        console.log(error);

        
        
    })
    
}
const {isPending,isError,error,data:comment}=useQuery({
 queryKey: ['comment', blog._id],
   refetchInterval: 1000, 
  refetchOnWindowFocus: true,
  queryFn:async()=>{

    const res = await fetch(`http://localhost:4000/comment/${blog._id}`)

    return res.json()
  }
})

if(isPending){

  return <Loader></Loader>
}

if(isError){

  return <p>{error.message}</p>
}
// useEffect(()=>{

//     axios.get(`http://localhost:4000/comment/${blog._id}`).then(res=>{

//         if(res.data){

           
//         setComment(res.data)
//         }
      
//     }).catch(error=>{

//         console.log(error);
        
//     })
// },[blog,setComment])
    

// console.log(comment);

    return (
        <div>
            <img src={blog.image} alt="" />

      {

        user.email === blog.email?<div><Link to={`/update/${blog._id}`} className='btn btn-primary'>Update</Link></div>: <div>
               <form onSubmit={handlecomment} className="max-w-md mx-auto p-4 border rounded space-y-4">
      <textarea
      name='comment'
       
        placeholder="Write your comment..."
        className="w-full h-32 p-2 border rounded resize-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Post Comment
      </button>
    </form>
          </div>
      }
            <h1>Yes I am blogs details</h1>

            <div>
              {
                comment?.map(res=><div key={res._id} res={res}><img className='w-10 h-10' src={res.photo} alt="" />
                <p>{res.userName}</p>
                <p>{res.comment}</p>
                </div>)
              }
            </div>
        </div>
    );
};

export default BlogsDeatils;