'use client'
import { FetchAPIData } from "@/utils/ApiFetch";
import { data } from "autoprefixer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("New")
  const [videos, setVideos] = useState(null)

  useEffect(()=>{
    setVideos(null)
    FetchAPIData(`search?part=snippet&q=${category}`).then((data)=> 
    setVideos(data.items)   
    // console.log(data.items)
    )
    
  },[category])
  console.log(videos)
  return (
<div>
  {
    videos.map((item,index)=>{
      return(
        <div>
        <img src={item.snippet.thumbnails.medium.url} alt="" />
         <p>{item.snippet.title}</p>
        </div>
      )
    })
  }
</div>
  );
}
