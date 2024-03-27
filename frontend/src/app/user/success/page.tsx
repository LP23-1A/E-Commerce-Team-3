'use client'
import Check from '@/assets/Check'
import Clock from '@/assets/Clock'
import List from '@/assets/List'
import { UserFooter } from '@/components/userComponents/Footer'
import UserNavbar from '@/components/userComponents/Navbar';


const SuccesfulOrder = () => {
  return (
    <div className=' h-full'>
      <UserNavbar />
      <div className='flex justify-center  h-[700px] mt-[100px] mb-[100px]'>
        <Clock />
        <div className=' flex items-center  flex-col justify-center gap-6'>
          <Check />
          <p className='text-[#151875] text-[43px] font-bold'>Таны захиалга амжилттай</p>
          <p className='w-[700px] text-center text-[#8A91AB]'>Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
          </p>
          <button className=' bg-[#FF1788] p-3 text-white'>Үргэлжлүүлэх</button>
        </div>
        <div className=' flex justify-end items-end'>
          <List />

        </div>
      </div>
      <UserFooter />
    </div>
  )
}

export default SuccesfulOrder
