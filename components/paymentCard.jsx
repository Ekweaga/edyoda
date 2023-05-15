import React,{useState} from 'react'
import Image from "next/image"

function Card() {
    const [btnOne,setBtnOne] = useState(false)
    const [btnTwo,setBtnTwo] = useState(false)
    const [btnThree,setBtnThree] = useState(false)
    const [price,setPrice] = useState(0)
    const [discountPrice,setDiscountPrice] = useState(0)

    const divOne = ()=>{
        setBtnOne(true)
        setBtnTwo(false)
        setBtnThree(false)
        setPrice(179)
        setDiscountPrice(price-50)
    }
    const divTwo = ()=>{
        setBtnTwo(true)
        setBtnThree(false)
        setBtnOne(false)
        setPrice(149)
        setDiscountPrice(price-50)
    }
    const divThree = ()=>{
        setBtnThree(true)
        setBtnOne(false)
        setBtnTwo(false)
        setPrice(99)
        setDiscountPrice(price-50)
    }

    const calc = () =>{
        const totalPrice = (18/100) * discountPrice
        return totalPrice
    }
  return (
    <div>
        <div className='bg-white md:w-[500px] rounded-md text-black p-3 md:mt-[200px] pb-8 w-[360px] mt-[100px]'>
            <div className='cardContainer flex flex-col items-center justify-center'>
                <div className="flex items-center justify-between gap-[150px]">
                    <div className='flex flex-col items-center gap-2'><span className='rounded-full bg-[#0096FF] p-2 flex items-center justify-center text-white h-[40px] w-[40px] font-bold'>1</span><span className="text-xs">Sign Up</span></div>
                    <div className='flex flex-col items-center gap-2'><span className='rounded-full bg-[#0096FF] p-2 flex items-center justify-center text-white h-[40px] w-[40px] font-bold'>2</span><span className="text-xs">Subscribe</span></div>
                </div>

            </div>

            <h1 className='text-center mt-[30px] text-2xl'>Select your subscription plan</h1>

            <div className='subscriptionContainer mt-[30px]'>
                <div className='flex justify-between border-[2px] border-[#BEBEBE] rounded-md p-2 bg-[#E6E6E6] text-[#BEBEBE] relative'>
                    <div className='absolute -top-[3px] left-[60px] text-white text-sm rounded-br-md rounded-bl-md px-6 bg-[#F77171] mb-[10px]'>
                        Offer expired
                    </div>
                    <div className='flex gap-2 mt-[13px] '>
                        <div><Image src="/r.png" width={30} height={50} alt="alt"/></div>
                        <span>12 Months Subscription</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span>Total <b className='text-[20px]'>&#x20B9;99</b></span>
                        <span>&#x20B9;8  /mo</span>
                    </div>

                </div><br/>



                <div className={`${btnOne ? "flex justify-between border-[2px] border-[#47BA68] rounded-md p-2 relative bg-[#D7EDDD]":"flex justify-between border-[2px] border-[#BEBEBE] rounded-md p-2 relative bg-[#FFFF]"}`} onClick={divOne}>
                <div className='absolute -top-[3px] left-[60px] text-white text-sm rounded-br-md rounded-bl-md px-6 bg-[#47BA68] mb-[10px]'>
                        Recommended
                    </div>
                    <div className='flex gap-2 mt-[13px]'>
                        <div><Image src={btnOne ? "/v.png":"/r.png"} width={30} height={50} alt="alt"/></div>
                        <span>12 Months Subscription</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span>Total <b className='text-[20px]'>&#x20B9;179</b></span>
                        <span>&#x20B9;15  /mo</span>
                    </div>

                </div><br/>



                <div className={`${btnTwo ? "flex justify-between border-[2px] border-[#47BA68] rounded-md p-2 relative bg-[#D7EDDD]":"flex justify-between border-[2px] border-[#BEBEBE] rounded-md p-2 relative bg-[#FFFF]"}`} onClick={divTwo}>
                    <div className='flex gap-2 '>
                        <div><Image src={btnTwo ? "/v.png":"/r.png"} width={30} height={50} alt="alt"/></div>
                        <span>6 Months Subscription</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span>Total <b className='text-[20px]'>&#x20B9;149</b></span>
                        <span>&#x20B9;25  /mo</span>
                    </div>

                </div><br/>


                <div className={`${btnThree ? "flex justify-between border-[2px] border-[#47BA68] rounded-md p-2 relative bg-[#D7EDDD]":"flex justify-between border-[2px] border-[#BEBEBE] rounded-md p-2 relative bg-[#FFFF]"}`} onClick={divThree}>
                    <div className='flex gap-2 '>
                        <div><Image src={btnThree ? "/v.png":"/r.png"} width={30} height={50} alt="alt"/></div>
                        <span>3 Months Subscription</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span>Total <b className='text-[20px]'>&#x20B9;99</b></span>
                        <span>&#x20B9;33  /mo</span>
                    </div>

                </div>

            </div>

            <div className=' flex flex-col gap-6 mt-[30px] p-2' style={{borderTop:"2px solid grey"}}>
                <div className='flex justify-between items-center'>
                <span>Subscription Fee</span>
                {price == 0 ? null :<span  style={{fontSize:'20px'}}> &#x20B9; {price}
                </span>}
               
                </div>

                <div className='flex justify-between  border border-red-800 bg-[#FAE1D4] rounded-md px-6 py-3'>
                    <div>
                        <h3 className='text-[#DF4D1F] font-bold mb-[10px]'>Limited Offer</h3>
                        <div className='flex gap-3 text-[#DE4313]'><div><Image src="/rt.png" width={20} height={20} alt="alt"/> </div>Offer valid till 25th March 2023</div>
                    </div>
                    <div style={{fontSize:'20px'}}>
                  -  &#x20B9; 50
                    </div>

                </div>

                <div className='flex justify-between items-center'>
                <span><span className='font-bold'>Total</span> (Incl. 18% of GST)</span>
              {discountPrice == 0 ? null :  <span className='text-3xl'>
                &#x20B9; {calc()}
                </span>} 
                </div>
                
            </div>

            <div className="buttons flex items-center justify-center gap-[20px] mt-[30px]">
                <button className="text-[#FAAFAF] border-[2px] border-[#FAAFAF] p-3 w-[220px] rounded-md">CANCEL</button>
                <button className="text-white bg-[#47BA68] p-3 w-[220px] rounded-md">PROCEED TO PAY</button>

            </div>

            <div>
                <Image src="/Frame 12537.png" width={120} height={50} alt="log" className='mt-[20px]'/>
            </div>

        </div>
    </div>
  )
}

export default Card;