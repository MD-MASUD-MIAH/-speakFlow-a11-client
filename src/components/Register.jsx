import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import GoogleLogin from './GoogleLogin';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router'
const Register = () => {
  const { registerUser,upDateUser,setUser  } = useContext(AuthContext);
const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const fmr = e.target;
    const newUser = new FormData(fmr);

    const { email, password, photo, name } = Object.fromEntries(newUser.entries());

    console.log(email);

     if(password.length < 6 ){
        
           
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Length must be at least 6 characte.`,
      });
      return
       }else if(!/[A-Z]/.test(password)){
       Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Must have an Uppercase letter in the password`,
   });
    return
   }else if(!/[a-z]/.test(password)){
       Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Must have a Lowercase letter in the password`,
      });
      return
        }
// else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){

//   Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: ` Must  have a special character`,
//       });

//       return
//             }else if(!/[0-9]/.test(password)){
//  Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: ` Must have a numeric character
// `,
//       });
//       return

//             }

    registerUser(email, password)
      .then(res => {
        console.log(res.user);


        upDateUser({displayName:name,photoURL: photo }).then(()=>{
      setUser({ ...res?.user, displayName: name, photoURL: photo })

       Swal.fire({
  title: "Register Success !",
  icon: "success",
  draggable: true
});

navigate('/')
        }).catch(error=>{

          console.log(error.message);
          
        })


        
        
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='w-11/12 mx-auto py-10 flex flex-col items-center justify-center'>
      <div className="md:max-w-sm mx-auto border border-[#2ecc71] rounded p-6 shadow">
        <h2 className="text-xl font-semibold mb-6">Register Now!</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              required
              name='name'
              type="text"
              className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
              placeholder="Enter your Name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Photo URL</label>
            <input
              required
              name='photo'
              type="text"
              className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
              placeholder="Photo URL"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Username or Email</label>
            <input
              required
              name='email'
              type="email"
              className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              name='password'
              type="password"
              className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold py-2 px-5 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Register
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-[#2ecc71] underline">
              Login
            </Link>
          </p>
        </form>

        <div className="flex w-[300px] items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-sm">Or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className='flex flex-col gap-4 items-center justify-center'>
         <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
