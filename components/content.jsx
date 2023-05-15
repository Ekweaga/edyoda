import React from 'react'
import Image from "next/image"

function Content() {
  return (
    <div className='text-white'>
        <div className='headings'>
        <h1 className='md:text-4xl font-bold text-2xl md:-mt-[50px] mt-[50px]'>Access curated courses worth</h1>
        <h1 className='md:text-4xl font-bold mt-[5px] text-2xl'><span className='relative'>&#x20B9; 18,500 <span className='absolute h-[5px] md:w-[115px] w-[80px] bg-[#FF0000] md:top-[25px] top-4 md:left-[32px] left-5'></span></span> at just <span className='text-[#0096FF]'>&#x20B9; 99</span> per year! </h1>

        </div>

        <div className="mt-[50px] flex flex-col gap-[30px]">
            <div className='flex gap-[50px] items-center'>
                <div className="bookImg">
                <Image src="/Group 20.png" width={40} height={40} alt="bookImg"/>
                </div>
                <div className='text-2xl'>
                    <span className='text-[#0096FF]'>100+</span> Job relevant courses
                </div>
                
            </div>

            <div className='flex gap-[50px] items-center'>
                <div className="bookImg">
                <Image src="/Icon.png" width={40} height={40} alt="bookImg"/>
                </div>
                <div className='text-2xl'>
                    <span className='text-[#0096FF]'>20 000+</span> Hours of content
                </div>
                
            </div>



            <div className='flex gap-[50px] items-center'>
                <div className="bookImg">
                <Image src="/Group 16.png" width={40} height={40} alt="bookImg"/>
                </div>
                <div className='text-2xl'>
                    <span className='text-[#0096FF]'>Exclusive</span> webinar access
                </div>
                
            </div>



            <div className='flex gap-[50px] items-center'>
                <div className="bookImg">
                <Image src="/Group 17.png" width={40} height={40} alt="bookImg"/>
                </div>
                <div className='text-2xl'>
                   Scholarship worth <span className='text-[#0096FF]'>&#x20B9; 94,500</span> 
                </div>
                
            </div>


            <div className='flex gap-[50px] items-center'>
                <div className="bookImg">
                <Image src="/Icon (2).png" width={40} height={40} alt="bookImg"/>
                </div>
                <div className='text-2xl'>
                    <span className='text-[#0096FF]'>Ad Free</span> Learning Experience
                </div>
                
            </div>

        </div>
       
    </div>
  )
}

export default Content;