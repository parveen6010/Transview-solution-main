import React from 'react'
import SignUp from '../components/Signup'
import Login from '../components/Login'
import AuthContent from '../components/AuthContent'
import '../css/Homepage.css'
import { useState } from 'react'

function HomePage() {
    const [isSignUp, setIsSignUp] = useState(true)

    return (
        <div className="bg-black flex flex-col items-center justify-center  w-screen h-screen flex-1 px-20 text-center">
            <div className='bg-white rounded-2xl shadow-2xl flex justify-center items-centre w-2/3 max-w-4xl h-2/3'>
                <div className={`transition-all duration-500 ease-in-out  ${isSignUp ? 'w-3/5 p-5 flex flex-col justify-center items-center' : ' w-2/5 p-5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 flex flex-col justify-center items-center'}`}>
                    {/* */}
                    <h2 className={`${isSignUp ?'text-3xl font-bold text-green-500 mb-2 mt-4' :'hidden' }`}>Create Your Account</h2>
                    <div className= {`${isSignUp ?'border-2 w-10 border-green-500 inline-block mb-10' :'hidden' }`}></div>
                    <div className='flex justify-center items-center'>
                        {isSignUp ? <SignUp/> :  <AuthContent isSignUp={isSignUp}  setIsSignUp={setIsSignUp} />}
                    </div>
                </div>
                <div className={`transition-all duration-500 ease-in-out ${isSignUp ? 'content w-2/5 p-5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 flex justify-center items-center' : 'w-3/5 p-5 flex justify-center items-center'}`}>
                   {isSignUp ?  <AuthContent isSignUp={isSignUp}  setIsSignUp={setIsSignUp} /> : <Login/>}
                </div>
            </div>
        </div>
    )
}

export default HomePage
