import React from 'react';
import { Outlet,  useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Root = () => {
const navigate = useNavigation()
    return (
        <div className=''>
    <Navbar></Navbar>
    {
      navigate.state ==='loading'?<Loader></Loader> :<Outlet></Outlet>
    }
    <Footer></Footer>
        </div>
    );
};

export default Root;