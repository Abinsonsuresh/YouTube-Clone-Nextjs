'use client'
import { getvideosData } from "@/provider/Slice/VideosSlice";
import { FetchAPIData } from "@/utils/ApiFetch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [category, setCategory] = useState("New")


  const dispatch = useDispatch()
  useEffect(()=>{
    // setVideos(null)
    FetchAPIData(`search?part=snippet&q=${category}`).then((data)=> 
    // setVideos(data?.items),
    dispatch(getvideosData(data?.items)) 
    // console.log(data.items)
    )
    
  },[category])

  const { data } = useSelector((state) => state.Videos)
  console.log(data)
  return (
<div>
  {
    data?.map((item,index)=>{
      return(
        <div key={index}>
        <img src={item?.snippet?.thumbnails?.medium?.url} alt="" />
         <p>{item?.snippet?.title}</p>
        </div>
      )
    })
  }
</div>
  );
}
