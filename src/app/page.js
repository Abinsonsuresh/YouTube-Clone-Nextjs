'use client'
import { FetchAPIData } from "@/utils/ApiFetch";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("New")
  useEffect(()=>{
    
    FetchAPIData(`search?part=snippet&q=${category}`).then((data)=> console.log(data))
    
  },[category])
  return (
<div>
  
</div>
  );
}
