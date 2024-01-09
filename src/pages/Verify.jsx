import React from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const navigate = useNavigate();

    const verifycall = () => {
        navigate("/pdffill");
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className=' p-10 w-1/3 border-5 border-solid border-gray-200 shadow-md rounded-lg bg-green-500 h-1/2'>
                <div className='ewaybill'>
                    <div className='mt-3 mb-4 font-bold'>
                        <h1 style={{fontSize: "20px"}}>Gr No.</h1>
                    </div>
                    <div>
                        <input style={{margin: "2px", padding: "3px"}} placeholder='Gr No' />
                    </div>
                </div>
                <div className='flex mt-2 '>
                    <div>
                        <input style={{margin: "2px", marginTop: "9%", width: "130%", padding: "3px"}} placeholder='OTP enter' />
                    </div>
                    <div className='ml-20 shadow-md rounded-lg mt-2 border border-solid border-black text-white bg-gray-500 w-1/4 p-2 pl-19 text-xl'>
                        <button>verify</button>
                    </div>
                </div>
                <div className='text-20 shadow-md rounded-lg mt-2 border border-solid border-black text-white bg-gray-500 w-1/4 p-2 pl-19 text-xl'
                     onClick={verifycall}
                >
                    <button>submit</button>
                </div>
            </div>
        </div>
    );
}

export default Verify;
