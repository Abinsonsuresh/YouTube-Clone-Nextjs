import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-4">
                <div>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                        </svg>
                        <h1 className='text-xl font-bold font-sans'>Youtube</h1>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-5">
                        <form className='flex items-center relative' action="">
                            <input type="text" placeholder='Search' className='p-2 px-4 rounded-full bg-transparent outline-none border border-[#5c5c5c83] w-[450px]' />
                            <div className='bg-gray-800 p-3 absolute right-0 rounded-r-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
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