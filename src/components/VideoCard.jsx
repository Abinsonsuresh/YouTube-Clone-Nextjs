import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

const VideoCard = () => {
    const { data } = useSelector((state) => state.Videos)
    console.log(data)

    const router = useRouter()
    return (
        <div>
            {
                data?.map((item, index) => {
                    return (
                        <div className="cursor-pointer" onClick={()=> router.push(`/Video/${item?.id?.videoId}`)} key={index}>
                            <img src={item?.snippet?.thumbnails?.medium?.url} alt="" />
                            <p>{item?.snippet?.title}</p>
                            <p>{item?.id?.videoId}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VideoCard