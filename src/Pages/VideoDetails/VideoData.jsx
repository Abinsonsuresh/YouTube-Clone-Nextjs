'use client'
import Navbar from '@/components/Navbar';
import { FetchAPIData } from '@/utils/ApiFetch';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

const VideoData = ({id}) => {

    const VId = id;
    const router = useRouter()
    // setVideoDetail(data.items[0])
    if(VId === null  || VId === "undefined")
    {
      router.push('/')
    }
    console.log(VId)
    const [details, setDetails] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState(null)

    useEffect(()=>{
        FetchAPIData(`videos?part=snippet,statistics&id=${VId}`)
        .then((data) => 
        setDetails(data.items[0])
        )

        FetchAPIData(`search?part=snippet&relatedToVideoId=${VId}&type=video`)
        .then((data) => 
        setRelatedVideos(data?.items)
        )
  
    },[VId])
console.log("D",details)
console.log("RDV",relatedVideos)

  return (
    <div>
      <Navbar/>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${VId}`} className="react-player " height={400} controls />

      <div className='flex flex-col'> 
        <p>{details?.snippet?.title}</p>
        <p>{details?.snippet?.channelTitle}</p>
        <p>{details?.snippet?.description}</p>
        <p>{details?.statistics?.viewCount}</p>
        <p>{details?.statistics?.likeCount}</p>





      </div>
      
 
    </div>
  )
}

export default VideoData