import Image from "next/image"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

const VideoCard = () => {
    const { data } = useSelector((state) => state.Videos)
    console.log(data)

    const router = useRouter()
    return (
        <div className=" gap-2 w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2 justify-center h-[90vh]">
            {
                data?.map((item, index) => {
                    return (
                        <div className="cursor-pointer p-2 max-h-[390px] max-w-[390px]" onClick={()=> router.push(`/Video/${item?.id?.videoId}`)} key={index}>
                            <div className="relative">
                            <Image className="rounded-lg max-h-[200px] object-cover" height={360} width={480} src={item?.snippet?.thumbnails?.medium?.url} alt="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
                            <div className="absolute bg-black p-1 bottom-1 rounded-sm right-1 text-xs">
                                11:30
                            </div>
                            </div>
                      
                            {/* width: 480, height: 360  */}
                            <div className="flex gap-4 my-2">
                            <Image className="rounded-full w-10 h-10" height={10} width={10} src={item?.snippet?.thumbnails?.high?.url} alt="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
                                <div className="flex flex-col">
                            <p>{item?.snippet?.title}</p>
                            <p className="mt-2 text-gray-500">{item?.snippet?.channelTitle}</p>
                            <p className="text-gray-500"><span>{Math.floor(Math.random() * (100 - 10) + 10)}K views</span> . <span>{Math.floor(Math.random() * (12 - 1) + 1)}months ago</span></p>

                                </div>
                            </div>
                            {/* <p>{item?.id?.videoId}</p> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VideoCard