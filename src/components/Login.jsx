import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import GoogleLogin from './GoogleLogin';
import Swal from 'sweetalert2';
import { PageName } from './PageName';
const Login = () => {

    const navigate = useNavigate() 
    const location = useLocation()
    const {logInUser} = use(AuthContext)

   PageName('Login')

    const handleLogin = (e)=>{

   e.preventDefault() 
   const frs = e.target 

   const formData = new FormData(frs) 

   const {email,password} = Object.fromEntries(formData.entries()) 

   
   
   logInUser(email,password).then(res=>{

    console.log(res.user);
     Swal.fire({
                  title: " Login Success !",
                  icon: "success",
                  draggable: true,
                  timer:1500,
                });
    
                navigate(location?.state ? location.state: '/');
   }).catch(error=>{

  

    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `${error.message}`,
 
});
    
   })

    }
    
    return (
         <div>
            

   <div className=' w-11/12 mx-auto py-10 flex flex-col items-center justify-center  min-h-[calc(100vh-300px)]'>


<div className="md:max-w-sm   mx-auto border border-[#550527] rounded p-6 shadow ">
      <h2 className="text-xl font-semibold mb-6">Login Now !</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Username or Email</label>
          <input
            required
         
          name='email'
            type="email"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your username or email"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input name='password'
            type="password"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your password"
            required
           

          />
        </div>

        <div className="flex items-center justify-between text-sm">
        
         
        </div>


        <button
          type="submit"
          className="w-full tom-btn "
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account? Please{' '} 
          <Link to='/register' href="#" className="text-[#550527] underline">
          Register
          </Link>
        </p>
      </form>
    </div>

<div>


<div className="flex w-[300px] items-center my-4">
  <div className="flex-grow h-px bg-gray-300"></div>
  <span className="mx-2 text-sm">Or</span>
  <div className="flex-grow  h-px bg-gray-300"></div>
</div>


<div className='flex flex-col gap-4  items-center justify-center'>


  
<GoogleLogin></GoogleLogin>


</div>

</div>


</div>


        </div>
    );
};

export default Login;