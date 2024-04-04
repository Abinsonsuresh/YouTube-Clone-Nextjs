import Image from "next/image"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { VCard } from "./VCard"

const VideoCard = () => {
    const { data } = useSelector((state) => state.Videos)
    console.log(data)

    const router = useRouter()
    return (
        <div className=" gap-2 w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2 justify-center h-[90vh]">
            {
                data?.map((item, index) => {
                    return (
                        <div onClick={() => router.push(`/Video/${item?.id?.videoId}`)} key={index}>
                            <VCard item = {item} index={index}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VideoCard