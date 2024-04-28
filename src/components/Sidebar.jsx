'use client'
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
import { SData, SDataMainS1, SDataMainS2, SDataMainS3 } from "@/Data/SideBarData";
const Sidebar = ({setCategory}) => {
  const [nav, setNav] = useState(true)
  const showNav = () => {
    setNav(!nav)
  }
//Fn to change category 

  const ChangeCategory = (e) => {
    setCategory(e)
    console.log(e,"clicked")
  }
  // #0f0f0f
  return (
    <>
      <div className={!nav ? 'min-h-screen w-full p-4 hidden md:flex flex-col items-center max-w-[100px]  ' : 'hidden'}>
        <div className='flex flex-col gap-2 w-full '>

          <span onClick={showNav} className='text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center'><IoIosMenu size={25} /></span>

          {SData.map((item, index) => (
            <div className="text-xs font-medium hover:bg-slate-500 rounded-xl p-2 flex flex-col gap-2 items-center" key={index}>
              {item.icon} {/* Render the icon component here */}
              <p>{item.name}</p>
            </div>
          ))}





        </div>
      </div>

      <div className={nav ? 'relative hidden md:block  h-full  min-w-[230px]  max-w-[250px]  overflow-y-auto    w-full  scroll-smooth' : 'hidden  h-full overflow-y-scroll scroll-smooth flex-col w-full p-2 bg-[#0f0f0f] min-h-screen overflow-hidden max-w-[500px] relative top-0'}>
        <div className="flex h-screen flex-col">

          <div className="p-4 pt-4 flex items-center gap-5">
            <span onClick={showNav} className='top-0 left-0'><IoIosMenu size={25} /></span>

            {/* <div className='flex items-center gap-2'>
              <Image height={30} width={30} src={"https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"} alt="" />
              <h1 className='text-xl font-bold font-sans'>Youtube</h1>
            </div> */}

          </div>


          <div className='flex py-4 flex-col gap-2 w-full border-b border-[#585858c5]'>
  
            {SDataMainS1.map((item, index) => (
            <span className="text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center" key={index}>
              {item.icon}
              <p>{item.name}</p>
            </span>
          ))}
    

          </div>

          <div className='flex py-4 flex-col gap-2 w-full border-b border-[#585858c5]'>
          {SDataMainS2.map((item, index) => (
            <span className="text-sm font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center" key={index}>
              {item.icon} 
              <p>{item.name}</p>
            </span>
          ))}
          </div>


          <div className='flex py-4 flex-col gap-2 w-full  border-[#585858c5]'>
           
          {SDataMainS3.map((item, index) => (
            <span onClick={()=>ChangeCategory(item.name)} key={index}>
              <p  className="text-sm  cursor-pointer font-semibold hover:bg-slate-500 rounded-xl px-4  py-2 flex gap-5 items-center z-50">
              {item.icon} 
              {item.name}
              </p>
            </span>
          ))}

          </div>

        </div>








      </div>
    </>



  )
}

export default Sidebar