'use client'
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
const Sidebar = () => {
  const [nav, setNav] = useState(false)
  const showNav = () => {
    setNav(!nav)
  }
  // #0f0f0f
  return (
    <>
      <div className={!nav ? 'min-h-screen w-full p-4 flex flex-col items-center' : 'hidden'}>
        <div className='flex flex-col gap-2 w-full '>

          <span onClick={showNav} className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><IoIosMenu size={25} /></span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><IoMdHome size={25} /> Home</span>

          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><SiYoutubeshorts size={25} /> Shorts</span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25} /> Subscriptions</span>

          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25} /> You</span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25} /> History</span>






        </div>
      </div>

      <div className={nav ? ' flex z-50 relative h-full  min-w-[230px] overflow-y-scroll scroll-smooth flex-col w-full p-2 bg-black min-h-screen overflow-hidden max-w-[500px]' : 'hidden  h-full overflow-y-scroll scroll-smooth flex-col w-full p-2 bg-black min-h-screen overflow-hidden max-w-[500px] relative top-0'}>
        <div className="p-2 pt-4 flex items-center gap-5">
      <span onClick={showNav} className='top-0 left-0'><IoIosMenu size={25} /></span>

      <div className='flex items-center gap-2'>
                    <Image height={30} width={30} src={"https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"} alt="" />
                        <h1 className='text-xl font-bold font-sans'>Youtube</h1>
                    </div>

        </div>

        <div className='flex flex-col gap-2 w-full border-b border-[#585858c5]'>
          <span className='text-md font-semibold hover:bg-slate-500 rounded-xl p-2 flex gap-5 items-center'><IoMdHome size={25} /> Home</span>

          <span className='text-md font-semibold hover:bg-slate-500 rounded-xl p-2 flex gap-5 items-center'><IoMdHome size={25} /> Shorts</span>

          <span className='text-md font-semibold hover:bg-slate-500 rounded-xl p-2 flex gap-5 items-center'><IoMdHome size={25} /> Subscriptions</span>

        </div>

      </div>
    </>



  )
}

export default Sidebar