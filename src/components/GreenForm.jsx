import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function GreenForm() {

  const navigate = useNavigate();
  const [isChecked,setIsChecked]=useState(false);
  const handleChange=(e)=>{
    setIsChecked(!isChecked) 
  }
  
  const AuthorizationFormgo =()=>{
    navigate("/AuthorizationForm");
    }
  return (

    <div className="bg-gray-700 w-screen h-screen flex justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center align-middle w-3/5 h-3/5 bg-white rounded-md shadow-sm shadow-gray-300"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4">Green Form</h2>
        <div className= 'border-2 w-10 border-green-500 inline-block mb-5'></div>
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className="bg-gray-200 p-2 flex flex-row items-center mr-4 mb-2 w-1/2 rounded-md">
            <CiUser className="text-gray-400 mr-2" />
            <input
              type="text"
              className="bg-gray-200 outline-none text-sm flex-1"
              name="driverName"
              placeholder="Driver Name"
            />
          </div>
          <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 w-1/2 rounded-md">
            <MdOutlineConfirmationNumber className="text-gray-400 mr-2" />
            <input
              type="number"
              className="bg-gray-200 outline-none text-sm flex-1"
              name="driverNumber"
              placeholder="Driver Number"
            />
          </div>
        </div>
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className="bg-gray-200 p-2 flex flex-row items-center mr-4 mb-2 w-1/2 rounded-md">
            <MdOutlineEmail className="text-gray-400 mr-2" />
            <input
              type="email"
              className="bg-gray-200 outline-none text-sm flex-1"
              name="sourceEmail"
              placeholder="Source Email"
            />
          </div>
          <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 w-1/2 rounded-md">
            <MdOutlineConfirmationNumber className="text-gray-400 mr-2" />
            <input
              type="number"
              className="bg-gray-200 outline-none text-sm flex-1"
              name="sourceNumber"
              placeholder="Source Number"
            />
          </div>
        </div>
        <div className="flex flex-row justify-around w-full px-4 py-2">
          <div className="bg-gray-200 p-2 flex flex-row items-center mr-4 mb-2 w-1/2 rounded-md">
            <MdOutlineEmail className="text-gray-400 mr-2" />
            <input
              type="email"
              className="bg-gray-200 outline-none text-sm flex-1"
              name="destinationEmail"
              placeholder="Destination Email"
            />
          </div>
          <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 w-1/2 rounded-md">
            <MdOutlineConfirmationNumber className="text-gray-400 mr-2" />
            <input
              type="number"
              className="bg-gray-200 outline-none text-sm flex-1"
              name="destinationNumber"
              placeholder="Destination Number"
            />
          </div>
        </div>
        <div className="flex flex-row mb-4 mt-2">
          <input type="checkbox" className="mr-2" name="tcCheckBox" onChange={handleChange}/>
          <p className="outline-none text-md flex-1 text-gray-500">I/We consent the above information is true and correct</p>
        </div>
        <div className="flex flex-row justify-evenly w-full">
          <button type="button" className={`border-2 ${isChecked ? 'border-green-500 bg-green-500 cursor-pointer' : 'border-green-300 bg-green-300 cursor-not-allowed'} text-white rounded-full px-12 py-2 inline-block font-semibold`}>
            Payment Gateway
          </button>
          <button type="submit" className={`border-2 ${isChecked ? 'border-green-500 bg-green-500 cursor-pointer' : 'border-green-300 bg-green-300 cursor-not-allowed disabled'} text-white rounded-full px-12 py-2 inline-block font-semibold`}
          onClick={AuthorizationFormgo}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GreenForm;
