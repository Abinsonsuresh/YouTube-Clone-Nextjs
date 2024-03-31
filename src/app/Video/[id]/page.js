'use client'
import VDetails from "@/Pages/VideoDetails/VDetails"
import { FetchAPIData } from "@/utils/ApiFetch";
import { useEffect, useState } from "react"

const page = ({params}) => {

    const VId = params.id;
    // setVideoDetail(data.items[0])
    const [details, setDetails] = useState(null)
    useEffect(()=>{
        FetchAPIData(`videos?part=snippet,statistics&id=${VId}`)
        .then((data) => 
        setDetails(data.items[0])
        )
  
    },[VId])
console.log("D",details)
  return (
    <div>
        <VDetails Details={details}/>
    </div>
  )
}

export default page