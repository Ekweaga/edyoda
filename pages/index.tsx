import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "../components/header"
import Content from "../components/content"
import Card from "../components/paymentCard"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Header/>

  <div className='bg-[#0E1A35] h-full flex justify-around items-center pb-[40px] md:flex-row flex-col px-3'>
    <div>
      <Content/>
    </div>
<div>
  <Card/>
</div>
  </div>
  </>
         
  )
}
