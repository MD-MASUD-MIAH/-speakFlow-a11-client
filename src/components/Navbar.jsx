import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
const {user,logout} = use(AuthContext)
    const linsk =<>
    
    <li><NavLink>Home</NavLink></li>
    <li><NavLink to='/allblogs'>All blogs</NavLink></li>
    <li><NavLink to='/addblog'>Add Blog</NavLink></li>
    <li><NavLink to='/featuredblog'> Featured Blogs</NavLink></li>
    <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
     </>


  const handleLogout = ()=>{

    logout().then(()=>{}).catch(error=>{

        console.log(error.message);
        
    })
  }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    {linsk}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {linsk}
    </ul>
  </div>
  {

    user?<div className='navbar-end flex gap-4'> 
        <img className='md:w-10 md:h-10 rounded-full' src={user.photoURL} alt="" />
        <button onClick={handleLogout} className='btn btn-primary' >Logout</button>
                     </div>:<div className="navbar-end flex gap-4">
 <NavLink className='btn btn-primary' to='/login'>Login</NavLink>
 <NavLink className='btn btn-primary' to='/register'>Register</NavLink>
  </div>
  }
</div>
        </div>
    );
};

export default Navbar;