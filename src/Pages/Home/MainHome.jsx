import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const MainHome = () => {
  return (
    <div>
      <Navbar/>
       
        <div>
            <VideoCard/>
        </div>
    </div>
  )
}

export default MainHome