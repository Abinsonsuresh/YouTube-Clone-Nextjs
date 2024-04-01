'use client'
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
const Sidebar = () => {
  const[nav, setNav] = useState(false)
  const showNav = () =>{

  }
  // #0f0f0f
  return (
    <>  
    <div className=" min-h-screen w-full p-4 flex flex-col items-center">
    <div className='flex flex-col gap-2 w-full '>

    <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><IoIosMenu size={25}/></span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><IoMdHome size={25}/> Home</span>

          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><SiYoutubeshorts size={25}/> Shorts</span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25}/> Subscriptions</span>

          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25}/> You</span>


          <span className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><MdOutlineSubscriptions size={25}/> History</span>


       


       
        </div>
</div>

      <div className="hidden flex h-full overflow-y-scroll scroll-smooth flex-col w-full p-2 bg-black min-h-screen overflow-hidden max-w-[500px] relative top-0">
        <div className='flex flex-col gap-2 w-full border-b border-[#585858c5]'>
          <span className='text-md font-semibold hover:bg-slate-500 rounded-xl p-2 flex gap-5 items-center'><IoMdHome size={25}/> Home</span>

          <span className='text-md font-semibold hover:bg-slate-500 rounded-xl p-2 flex gap-5 items-center'><IoMdHome size={25}/> Shorts</span>

          <span className='text-md font-semibold hover:bg-slate-500 rounded-xl p-2 flex gap-5 items-center'><IoMdHome size={25}/> Subscriptions</span>
       
        </div>
      
      </div>
    </>



  )
}

export default Sidebar