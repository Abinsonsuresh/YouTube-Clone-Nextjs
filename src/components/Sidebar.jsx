'use client'
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
const Sidebar = () => {
  const [nav, setNav] = useState(true)
  const showNav = () => {
    setNav(!nav)
  }
  // #0f0f0f
  return (
    <>
      <div className={!nav ? 'min-h-screen w-full p-4 flex flex-col items-center max-w-[100px]  border' : 'hidden'}>
        <div className='flex flex-col gap-2 w-full '>

          <span onClick={showNav} className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><IoIosMenu size={25} /></span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><IoMdHome size={25} /> Home</span>

          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><SiYoutubeshorts size={25} /> Shorts</span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25} /> Subscriptions</span>

          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25} /> You</span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25} /> History</span>






        </div>
      </div>

      <div className={nav ? 'relative z-50  h-full  min-w-[230px]    bg-black   max-w-[250px]  overflow-hidden flex flex-col overflow-y-scroll  overflow-x-hidden scroll  w-full  scroll-smooth' : 'hidden  h-full overflow-y-scroll scroll-smooth flex-col w-full p-2 bg-[#0f0f0f] min-h-screen overflow-hidden max-w-[500px] relative top-0'}>
        <div className=" h-screen">

          <div className="p-4 pt-4 flex items-center gap-5">
            <span onClick={showNav} className='top-0 left-0'><IoIosMenu size={25} /></span>

            <div className='flex items-center gap-2'>
              <Image height={30} width={30} src={"https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"} alt="" />
              <h1 className='text-xl font-bold font-sans'>Youtube</h1>
            </div>

          </div>


          <div className='flex py-4 flex-col gap-2 w-full border-b border-[#585858c5]'>
          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><IoMdHome size={25} /> Home</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Shorts</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><MdOutlineSubscriptions size={25} /> Subscriptions</span>

        </div>

        <div className='flex py-4 flex-col gap-2 w-full border-b border-[#585858c5]'>
          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><IoMdHome size={25} /> You</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> History</span>
        </div>


        <div className='flex py-4 flex-col gap-2 w-full  border-[#585858c5]'>
          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><IoMdHome size={25} /> Trending</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Shopping</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Music</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Movies</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Live</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Gaming</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> News</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Sports</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Courses</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Fashion & Beauty</span>

          <span className='text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center'><SiYoutubeshorts size={25} /> Podcasts</span>


        </div>  

        </div>




     

   

      </div>
    </>



  )
}

export default Sidebar