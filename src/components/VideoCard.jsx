import Image from "next/image"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

const VideoCard = () => {
    const { data } = useSelector((state) => state.Videos)
    console.log(data)

    const router = useRouter()
    return (
        <div className="flex gap-2 flex-wrap p-2 justify-center">
            {
                data?.map((item, index) => {
                    return (
                        <div className="cursor-pointer p-2 max-w-[380px]" onClick={()=> router.push(`/Video/${item?.id?.videoId}`)} key={index}>
                            <Image className="rounded-lg" height={360} width={480} src={item?.snippet?.thumbnails?.medium?.url} alt="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
                      
                            {/* width: 480, height: 360  */}
                            <div className="flex gap-4 my-4">
                            <Image className="rounded-full w-10 h-10" height={10} width={10} src={item?.snippet?.thumbnails?.high?.url} alt="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
                                <div className="flex flex-col">
                            <p>{item?.snippet?.title}</p>
                            <p className="mt-2 text-gray-500">LunarCodes WebSolutions</p>
                            <p className="text-gray-500"><span>12M Views</span> . <span>1 year ago</span></p>

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