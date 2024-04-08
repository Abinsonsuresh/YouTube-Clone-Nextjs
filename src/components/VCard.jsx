import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export const VCard = ({item,  index}) => {
    const router = useRouter()

    return (
        <div>
            <div className="cursor-pointer p-2 max-h-[390px] max-w-[390px]" >
                <div className="relative">
                    <Image className="rounded-lg max-h-[200px] object-cover" height={360} width={480} src={item?.snippet?.thumbnails?.medium?.url} alt="" />
                    <div className="absolute bg-[#1d1d1d] p-1 bottom-1 rounded-xs right-1 font-semibold rounded-md  text-xs">
                        {Math.floor(Math.random() * (59 - 10) + 10)} : {Math.floor(Math.random() * (59 - 10) + 10)}
                    </div>
                </div>

                {/* width: 480, height: 360  */}
                <div className="flex gap-4 my-2">
                    <Image className="rounded-full w-10 h-10" height={10} width={10} src={item?.snippet?.thumbnails?.high?.url} alt="" />
                    <div className="flex flex-col">
                        <p>{item?.snippet?.title}</p>
                        <p className="mt-2 text-gray-500">{item?.snippet?.channelTitle}</p>
                        <p className="text-gray-500"><span>{Math.floor(Math.random() * (100 - 10) + 10)}K views</span> . <span>{Math.floor(Math.random() * (12 - 1) + 1)}months ago</span></p>

                    </div>
                </div>
                {/* <p>{item?.id?.videoId}</p> */}
            </div>
        </div>
    )
}
