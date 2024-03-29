import React from 'react'
import { useState } from 'react'
import { FaRegAddressCard } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
function Signup() {
  const [isVerified,setIsVerified]=useState({
    MobileOtp:false,
    emailOtp:false
  });
  const OTP={MobileOtp:"123456", emailOtp:"987456"};
  const [user,setUser]=useState({});
  const [userCollection,setUserCollection]=useState([])
  const isDisabled=()=>{
    return !(isVerified.MobileOtp && isVerified.emailOtp);
  }
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUserCollection([...userCollection,user]);
  }
  const handleVerify=(e)=>{
    const name=e.target.name;
    const val=e.target.val;
    if(name==="MobileOtpBtn"){
      if(user.MobileOtp==='')alert("please enter otp");
      else if(user.MobileOtp===OTP.MobileOtp){
        setIsVerified({...isVerified, MobileOtp: true});
      }
      else alert('OTP is incorrect');
    }else {
      if(user.emailOtp==='')alert("please enter otp");
      else if(user.emailOtp===OTP.emailOtp){
        setIsVerified({...isVerified, emailOtp: true});
      }
      else alert('OTP is incorrect');
    }
  }
  return (
    <div className=''>
        <form action="" className="flex flex-col items-centre" onSubmit={handleSubmit}>
            <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
                <FaRegAddressCard className='text-gray-400 mr-2'/>
               <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='pan' placeholder='Enter Your PAN Number' onChange={handleChange} required/>
            </div>
           <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md'>
            <IoDocumentOutline className='text-gray-400 mr-2'/>
            <input type="text" className="bg-gray-200 outline-none text-sm flex-1" name='gst' placeholder='Enter Your GST Number' onChange={handleChange} required="true"/>
           </div>
            
            <div className="flex flex-row items-center mr-2 mb-2">
              <div className='bg-gray-200  p-2 flex flex-row items-center mr-2 rounded-md'>
                <MdOutlineEmail className='text-gray-400 mr-2'/>
                <input type='email' className='bg-gray-200 outline-none text-sm flex-1' name='Email' placeholder='Enter Your Email Address' onChange={handleChange} required/>
              </div>
              <div className='bg-gray-200  flex flex-row items-center mr-2 rounded-md'>
                <input type='number' className='bg-gray-200 p-2 outline-none text-sm flex-1' name='emailOtp' onChange={handleChange} placeholder='Enter OTP'/>
                <IoIosCheckmarkCircleOutline className='text-gray-400 mr-2'/>
              </div>
              
              <button type='button' onClick={handleVerify} name='emailOtpBtn' className='border-2 border-green-500 rounded-full px-4 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white' >Verify </button>
            </div>
            <div className="flex flex-row items-center mr-2 mb-2">
              <div className='bg-gray-200 p-2 flex flex-row items-center mr-2 rounded-md'>
                <CiMobile1 className='text-gray-400 mr-2'/>
                <input type='number' className='bg-gray-200 outline-none text-sm flex-1' name='Phone' placeholder='Enter Your Mobile Number' onChange={handleChange} required/>
              </div>
              <div className='bg-gray-200  flex flex-row items-center mr-2 rounded-md'>
                <input type='number' className='bg-gray-200 p-2 outline-none text-sm flex-1' name='MobileOtp' onChange={handleChange} placeholder='Enter OTP' required />
                <IoIosCheckmarkCircleOutline className='text-gray-400 mr-2'/>
              </div>
              <button type='button' onClick={handleVerify} name='MobileOtpBtn' className='border-2 border-green-500 rounded-full px-4 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white'>Verify</button>
            </div>
            <button type='submit' disabled={isDisabled()} className='border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold text-green-500 hover:bg-green-500 hover:text-white cursor-not-allowed' >Sign Up</button>
        </form>
    </div>
  )
}

export default Signup

