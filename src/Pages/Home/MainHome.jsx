import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const MainHome = () => {
  return (
    <div>
      <Navbar/>
        <div className='p-4'>
            <p>YOUTUBE</p>
        </div>
        <div>
            <VideoCard/>
        </div>
    </div>
  )
}

export default MainHome