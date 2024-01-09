import React from 'react'
import Navbar from '../components/Navbar'
import DashBody from '../components/DashBody'
function Dashboard() {
  return (
    
    <div className='flex flex-col'>
        <Navbar/>
        <DashBody/>
    </div>
  )
}

export default Dashboard