import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const dashboardgo = () => {
      navigate("/dashboard");
  }
        
  

  const handleChange = (e) => {
    // setUser({...user,[e.target.name]:e.target.value})

  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-green-500 mb-4">Login</h2>
      <div className= 'border-2 w-10 border-green-500 inline-block mb-5'></div>
      <form action="" className="">
        <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-4 rounded-md">
          <CiMobile1 className="text-gray-400 mr-2" />
          <input
            type="number"
            className="bg-gray-200 outline-none text-sm flex-1"
            name="Phone"
            placeholder="Enter Your Mobile Number"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-centre mb-4">
            <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-2 rounded-md">
              <IoIosCheckmarkCircleOutline className="text-gray-400 mr-2" />
              <input
              type="number"
              className="bg-gray-200 outline-none text-sm flex-1"
              name="MobileOtp"
              onChange={handleChange}
              placeholder="Enter OTP"
              required
            />
            </div>
          <button
            type="button"
            className="border-2 border-green-500 rounded-full px-4 h-8 inline-block font-semibold ml-4 text-green-500 hover:bg-green-500 hover:text-white"
          >
            Get OTP
          </button>
        </div>
        <button
          type="submit"
          className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold text-green-500 hover:bg-green-500 hover:text-white"
        onClick={dashboardgo}
       >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
