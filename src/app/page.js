'use client'
import MainHome from "@/Pages/Home/MainHome";
import Sidebar from "@/components/Sidebar";
import { getvideosData } from "@/provider/Slice/VideosSlice";
import { FetchAPIData } from "@/utils/ApiFetch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [category, setCategory] = useState("New")


  const dispatch = useDispatch()
  // useEffect(() => {

  //   FetchAPIData(`search?part=snippet&q=${category}`).then((data) =>

  //     dispatch(getvideosData(data?.items))

  //   )

  // }, [category])


  return (
    <div>
      <div className="grid grid-cols-10">

        <div className="col-span-2 border hidden md:flex">
          <Sidebar />
        </div>

        <div className="col-span-8">
          <MainHome />

        </div>
      </div>
    </div>
  );
}
