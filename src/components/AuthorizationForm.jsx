import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";


function AuthorizationForm() {
  const [isChecked,setIsChecked]=useState(false);
  const handleChange=(e)=>{
    setIsChecked(!isChecked) 
  }
   
  const eway =() =>{
    
    window.location.href ="/e-way-bill.pdf";
  }

  return (
    <div className="bg-gray-700 w-screen h-screen flex justify-center items-center">
      <div
        action=""
        className="flex flex-col justify-center items-center align-middle w-3/5 h-3/5 bg-white rounded-md shadow-sm shadow-gray-300"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4">Authorization Form</h2>
        <div className= 'border-2 w-10 border-green-500 inline-block mb-5'></div>
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 w-1/2 rounded-md">
            <MdOutlineConfirmationNumber className="text-gray-400 mr-2" />
            <input
              type="number"
              className="bg-gray-200 outline-none text-sm flex-1"
              name="driverNumber"
              placeholder="Enter OTP"
            />
          </div>
        </div>
    
        <div className="flex flex-row justify-evenly w-full">
          <button type="button" className='border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold' >
            Verify
          </button>
          <button type="submit" className='border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold'
          onClick={eway}
          >
            Submit
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default AuthorizationForm;