import { FaYoutube } from "react-icons/fa";
import Image from "next/image"

const Navbar = () => {
    return (
        <div>
            <div className="flex gap-2 justify-between items-center p-4">
                <div>
                    <div className='flex items-center gap-2'>
                    <Image height={30} width={30} src={"https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"} alt="" />
                        <h1 className='text-xl font-bold font-sans'>Youtube</h1>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-5">
                        <form className='flex items-center relative' action="">
                            <input type="text" placeholder='Search' className='hidden md:block p-2 px-4 rounded-full bg-transparent outline-none border border-[#5c5c5c83] max-w-[450px]' />
                            <div className='md:bg-gray-800 p-3 absolute right-0 rounded-r-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </div>
                        </form>

                        <div className='bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center p-2'>
                            <p>M</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                <div className='bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center p-2'>
                            <p>M</p>
                        </div>
                        <div className='bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center p-2'>
                            <p>M</p>
                        </div>
                        <div className='bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center p-2'>
                            <p>M</p>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar