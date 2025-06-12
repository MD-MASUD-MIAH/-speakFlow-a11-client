import React from 'react';
import View from './View';

const PremuimCard = () => {

 const   [ref,setRef] = View()


    return (
        <div className='py-6 overflow-x-hidden'>
             <div>
                  <h1 className="text-center font-bold text-xl md:text-4xl pt-10 uppercase ">
       OUR PRICING PLANS
      </h1>
      <p className="text-center pt-4 pb-10  text-[#7f8c8d]">
       Choose the perfect plan for your writing journey. Whether you're just getting started or ready to 
        <br /> <span className='hidden md:block'>scale your content, we have a plan that fits your needs.{" "}</span>
      </p>
             </div>


<div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3  gap-4'>




<div ref={ref} className={`card  bg-base-100 s overflow-hidden shadow-lg  w-11/12 mx-auto transform transition-all duration-700 ease-out
           ${setRef ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} border border-[#550527]`}>
  <div className="card-body">
    <span className="badge badge-xs text-white badge-warning bg-[#550527]">Basic</span>
    <div className="flex justify-between">
      <h2 className="text-xl font-bold">Starter</h2>
      <span className="text-xl">$0/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited posts & reading</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Ad-free experience</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='line-through'>Collaborative writing </span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='line-through'>Profile customization</span>
      </li>
      <li className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Reader analytics</span>
      </li>
      <li className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Offline reading mode</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn tom-btn w-full">Subscribe</button>
    </div>
  </div>
</div>


<div  ref={ref} className={`card  bg-base-100 s overflow-hidden shadow-lg  w-11/12 mx-auto transform transition-all duration-700 ease-out
           ${setRef ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} border border-[#550527]`}>
  <div className="card-body">
    <span className="badge badge-xs text-white badge-warning bg-[#550527]">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-xl font-bold">Plus</h2>
      <span className="text-xl">$18/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited posts & reading</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Ad-free experience</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Collaborative writing </span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Profile customization</span>
      </li>
      <li className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Reader analytics</span>
      </li>
      <li className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Offline reading mode</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn tom-btn w-full">Subscribe</button>
    </div>
  </div>
</div> 


<div  ref={ref} className={`card  bg-base-100 s overflow-hidden shadow-lg  w-11/12 mx-auto transform transition-all duration-700 ease-out
           ${setRef ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} border border-[#550527]`}>
  <div className="card-body">
    <span className="badge badge-xs text-white badge-warning bg-[#550527]"> Expansive </span>
    <div className="flex justify-between">
      <h2 className="text-xl font-bold">Premium</h2>
      <span className="text-xl">$29/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited posts & reading</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Ad-free experience</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Collaborative writing </span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Profile customization</span>
      </li>
      <li className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="">Reader analytics</span>
      </li>
      <li className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="">Offline reading mode</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn tom-btn w-full">Subscribe</button>
    </div>
  </div>
</div>

</div>
        </div>
    );
};

export default PremuimCard;