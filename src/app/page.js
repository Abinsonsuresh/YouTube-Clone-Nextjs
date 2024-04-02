'use client'
import MainHome from "@/Pages/Home/MainHome";
import Sidebar from "@/components/Sidebar";
import { getvideosData } from "@/provider/Slice/VideosSlice";
import { FetchAPIData } from "@/utils/ApiFetch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [category, setCategory] = useState("Trending")


  const dispatch = useDispatch()
  useEffect(() => {

    FetchAPIData(`search?part=snippet&q=${category}`).then((data) =>

      dispatch(getvideosData(data?.items))

    )

  }, [category])


  return (
    <div>
      {/* <div className="grid grid-cols-10">

        <div className="col-span-1 w-full hidden md:flex ">
          <Sidebar />
        </div>

        <div className="col-span-9 w-full  overflow-hidden">
          <MainHome />

        </div>
      </div> */}

      <div className="flex flex-row">


          <Sidebar />



        <div className=" w-full  overflow-hidden">
          <MainHome />

        </div>


      </div>
    </div>
  );
}
