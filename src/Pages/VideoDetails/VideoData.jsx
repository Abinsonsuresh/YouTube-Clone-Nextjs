'use client'
import Navbar from '@/components/Navbar';
import { FetchAPIData } from '@/utils/ApiFetch';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

const VideoData = ({ id }) => {

  const VId = id;
  const router = useRouter()
  // setVideoDetail(data.items[0])
  if (VId === null || VId === "undefined") {
    router.push('/')
  }
  console.log(VId)
  const [details, setDetails] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState(null)
  const [readMore, setReadMore] = useState(false)


  useEffect(() => {
    FetchAPIData(`videos?part=snippet,statistics&id=${VId}`)
      .then((data) =>
        setDetails(data.items[0])
      )

    FetchAPIData(`search?part=snippet&relatedToVideoId=${VId}&type=video`)
      .then((data) =>
        setRelatedVideos(data?.items)
      )

  }, [VId])
  console.log("D", details)
  console.log("RDV", relatedVideos)

  let desc = !readMore ? details?.snippet?.description?.slice(0, 300) : details?.snippet?.description
  return (
    <div>
      <Navbar />
      <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${VId}`} className="react-player" width="100%"
          height="100%"
          style={{ backgroundColor: "#000000" }}
          playing={true} controls />

      </div>

      <div className='flex flex-col p-4'>
        <p className='font-bold text-xl'>{details?.snippet?.title}</p>
        <p className='text-xl font-semibold'>{details?.snippet?.channelTitle}</p>
        <div className='bg-[#262626] p-4 rounded-xl'>
        <p>{desc}</p>
        <span className={readMore ? 'hidden' : 'cursor-pointer font-bold'} onClick={()=>setReadMore(!readMore)}>Readmore</span>
        </div>
        <p>{details?.statistics?.viewCount}</p>
        <p>{details?.statistics?.likeCount}</p>





      </div>


    </div>
  )
}

export default VideoData