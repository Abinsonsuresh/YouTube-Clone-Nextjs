'use client'

import VideoData from "@/Pages/VideoDetails/VideoData"

const page = ({params}) => {


  return (
    <div>
      <VideoData id={params.id}/>
        {/* <VDetails Details={details}/> */}
    </div>
  )
}

export default page