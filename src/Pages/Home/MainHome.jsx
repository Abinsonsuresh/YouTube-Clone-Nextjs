import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const MainHome = () => {
  return (
    <div>
      <Navbar/>
        <div className='p-4'>
            <h3>YOUTUBE</h3>
        </div>
        <div>
            <VideoCard/>
        </div>
    </div>
  )
}

export default MainHome