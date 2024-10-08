'use client'
import Navbar from '@/components/Navbar';
import { FetchAPIData } from '@/utils/ApiFetch';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import { VCard } from '@/components/VCard';


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
        // console.log(data)
      )

  }, [VId])
  console.log("D", details)
  console.log("RDV", relatedVideos)


  let desc = !readMore ? details?.snippet?.description?.slice(0, 200).split('\n')  : details?.snippet?.description.split('\n');

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
            <div className="flex flex-col md:flex-row md:justify-between  md:items-center">

              <div className='flex flex-col items-start  my-4 md:flex-row md:items-center gap-5'>
                <div className="flex gap-3 ">
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

              <div className='flex items-center gap-3 overflow-x-scroll md:overflow-hidden scroll-smooth  w-f ull  my-2 md:my-0'>
              <div className='py-2 bg-[#252525] text-sm rounded-3xl px-4 font-bold flex items-center cursor-pointer'><span className='border-r px-2 flex items-center gap-2'> <AiOutlineLike size={20}/> {details?.statistics?.likeCount}</span> <span> <AiOutlineDislike className='ml-2' size={20} /> </span></div>

              <div className='py-2 bg-[#252525] text-sm rounded-3xl px-4 font-bold flex items-center'><span className=' px-2 flex items-center gap-2'> <PiShareFat   size={20}/> Share</span></div>

              <div className='py-2 bg-[#252525] text-sm rounded-3xl px-4 font-bold flex items-center'><span className=' px-2 flex items-center gap-2'> <BiSolidDownload  size={20}/> Download</span></div>

              <div className='p-2 bg-[#252525] text-sm rounded-full  font-bold flex items-center'><span className='flex items-center gap-2'> <IoIosMore  size={20}/> </span></div>
              </div>
            </div>
            <div className='bg-[#262626] p-4 rounded-xl'>
              {/* <p>{desc}</p> */}
              <div className="flex gap-3 my-2">
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
          
          </div>
        </div>


        <div className=''>
        <div className=" gap-2 w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-[#424141]  p-2 justify-center h-[90vh]">
            {
                relatedVideos?.map((item, index) => {
                    return (
                      <div onClick={() => router.push(`/Video/${item?.id?.videoId}`)} key={index}>
                            <VCard item = {item} index={index}/>
                        </div>
                    )
                })
            }
        </div>
        </div>

      </div>



    </div>
  )
}

export default VideoData