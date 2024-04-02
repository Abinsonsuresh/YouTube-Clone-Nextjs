import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const MainHome = () => {
  return (
    <div className=''>
      <Navbar/>
       
        <div className='overflow-y-auto'>
            <VideoCard/>
        </div>
    </div>
  )
}

export default MainHome