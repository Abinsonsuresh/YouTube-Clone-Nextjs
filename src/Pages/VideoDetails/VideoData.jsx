'use client'
import Navbar from '@/components/Navbar';
import { FetchAPIData } from '@/utils/ApiFetch';
import dayjs from 'dayjs';
import Image from 'next/image';
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
  // const [desc, setDesc] = useState('')



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


  let desc = !readMore ? details?.snippet?.description?.slice(0, 300).split('\n') : details?.snippet?.description.split('\n');

  let day = dayjs(details?.snippet?.publishedAt?.slice(0, 10)).format('MMMM-DD,YYYY')
  console.log(day)
  return (
    <div>
      <Navbar />
      <div className=" p-4">
        <div>
          <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${VId}`} className="react-player" width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true} controls />

          </div>

          <div className='flex flex-col my-4'>
            <p className='font-bold text-xl'>{details?.snippet?.title}</p>
            <div className="flex justify-between items-center" >

              <div className='flex flex-col items-start my-4 md:flex-row md:items-center gap-5'>
                <div className="flex gap-3">
                <Image className="rounded-full w-10 h-10 object-cover" height={10} width={10} src={'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png'} alt="" />
                <div className='flex flex-col'>
                  <p className='text-md  font-semibold'>{details?.snippet?.channelTitle}</p>
                  <p className='text-gray-500 text-sm'>233 Subscribers</p>
                </div>
                </div>
                <div className='flex gap-3'>
                  <span className='py-2 bg-[#252525] rounded-3xl text-sm font-semibold px-4'>Join</span>
                  <span className='py-2 bg-white text-sm rounded-3xl px-4 text-black'>Subscribe</span>
                </div>
              </div>

              <div>
                like
              </div>
            </div>
            <div className='bg-[#262626] p-4 rounded-xl'>
              {/* <p>{desc}</p> */}
              <div className="flex gap-3">
                <p className='font-semibold text-sm'>{details?.statistics?.viewCount} views</p>
                <p className='font-semibold text-sm'>Published at {day}</p>

              </div>
              {desc && desc?.map((desc, index) => (
                <React.Fragment key={index}>
                  {desc}
                  {index < desc?.length - 1 && <br />}
                </React.Fragment>
              ))}
              <span className={readMore ? 'hidden' : 'cursor-pointer font-bold'} onClick={() => setReadMore(!readMore)}>Readmore</span>
            </div>
            <p>{details?.statistics?.viewCount}</p>
            <p>{details?.statistics?.likeCount}</p>





          </div>
        </div>


        <div className=''>
          sdf
        </div>

      </div>



    </div>
  )
}

export default VideoData