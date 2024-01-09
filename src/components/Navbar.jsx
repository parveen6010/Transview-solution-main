import React from 'react';

function Navbar() {
  return (
    <div className='w-full p-2 fixed top-0 bg-white shadow-gray-500 shadow-md'>
      <nav className='flex justify-between p-2'>
        <div className=''>
          <h1 className='text-3xl font-bold text-gray-700 pl-4'>Transview Solutions</h1>
        </div>
        <ul className='flex justify-evenly items-center w-1/3'>
          <li><a href='#' className='text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500'>Home</a></li>
          <li><a href='#' className='text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500'>Track My vehicle</a></li>
          <li><a href='#' className='text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500'>View Vehicle Document</a></li>
          <li><a href='#' className='text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500'>Fill e-way Bill</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
