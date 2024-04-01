import { FetchAPIData } from '@/utils/ApiFetch';
import React, { useEffect, useState } from 'react'
import VDetails from './VDetails';

const VideoData = ({id}) => {

    const VId = id;
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
        <VDetails/>
    </div>
  )
}

export default VideoData