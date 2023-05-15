import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"

function Header() {
     const [open,setOpen] = useState(false)
  return (

   

    <>
   
    <div className='py-4'>
        <div className='flex justify-between items-center w-[90%] mx-auto'>
            <div className='headerRight flex items-center justify-center gap-[70px]'>
              <div className='logo'>
                <Image src="/EDYODA.png" width={100} height={100} alt="logo"/>

                    </div>
                    <div className='md:flex items-center justify-center gap-2 hidden '>
                        Courses  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>

                    <div className='md:flex items-center gap-2 hidden'>
                        Programs  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>

            </div>

            <div className='headerLeft md:flex items-center justify-center gap-[70px] hidden'>
            <Image src="/Vector.png" width={17} height={50} alt="logo" className='cursor-pointer'/>

            <div className='cursor-pointer'>
                Login
            </div>

            <div>
                <button className='bg-gradient-to-r from-[#0089FF] to-[#014BFF] text-white p-2 rounded-full w-[150px]'>JOIN NOW</button>
            </div>
            </div>

            <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={20} height={20}></Image>
        </div>

          
        <div
          className={`md:hidden text-black absolute w-2/3 h-screen 
      px-7 py-2 font-medium bg-[#FFFF]  top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        style={{zIndex:333}}>
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
          <div className='flex items-center justify-center gap-2 '>
                        Courses  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        Programs  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                    <div className='cursor-pointer flex items-center justify-center'>
                Login
            </div>
               
            <div className="flex items-center justify-center mt-[150px]">
                <button className='bg-gradient-to-r from-[#0089FF] to-[#014BFF] text-white p-2 rounded-full w-[150px]'>JOIN NOW</button>
            </div>
                
          </ul>
        </div>
            
        </div>

       

    </div> 
    </>
  )
}

export default Header