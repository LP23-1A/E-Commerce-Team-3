'use client'
import { UserFooter } from '@/components/userComponents/Footer';
import UserNavbar from '@/components/userComponents/Navbar';
import OrderButton from '@/components/userComponents/OrderButton';
import { useBasket } from '@/components/userComponents/OrderContext';
import { parseCookies } from 'nookies';
import {useRouter} from 'next/navigation'

import React, { useEffect } from 'react'

const Order = () => {
  const { basket, setBasket } = useBasket();
  const router = useRouter()

    useEffect(() => {
        const cookies = parseCookies();
        const basketFromCookie = cookies.order;
        if (basketFromCookie) {
          setBasket(JSON.parse(basketFromCookie));
        }
      }, []);

      const totalPrices = basket.reduce(
        (acc, curr) => acc + curr.price * curr.count,
        0
      );
      const totalPrice = totalPrices;
      const handlePost = ()=>{
     
        router.push('/user/delivery')
       }
  return (
    <>
      <UserNavbar />
      <div className='flex justify-center gap-5'>
        <div>
        <p className="text-[#151875] font-bold text-[18px]">Hekto Demo</p>
          <p className="text-[#151875] text-[18px]">Cart/ Information/ Shipping/ Payment</p>
 
 <div className='flex gap-4'>
 <div className='bg-[#F4F4FC] w-[792px] h-[920px] py-[50px] px-[50px]'>
          <div>
            <div className='flex flex-col justify-around h-[200px]'>
              <p className="text-[#151875] font-bold text-[18px]">Contact Information</p>
              <input className='bg-[#F4F4FC] border-b-2 border-[#BFC5E0]' type="text" placeholder='Email or mobile phone number' />
              <p className=" text-[12px] text-[#8A91AB]">Keep me up to date on news and excluive offers</p>
            </div>
            <div className='flex flex-col gap-[20px]  mt-[100px]'>
              <p className="text-[#151875] font-bold text-[18px]">Shipping address</p>
              <div className='flex justify-between '>
                <input className='bg-[#F4F4FC] border-b-2 border-[#BFC5E0] w-[336px]' type="text" placeholder='First name (optional)' /><input className='bg-[#F4F4FC] w-[336px] border-b-2 border-[#BFC5E0]' type="text" placeholder='Last name' />
              </div>
           <div className='flex flex-col gap-[20px]'>
           <input className='bg-[#F4F4FC] border-b-2 border-[#BFC5E0]' type="text" placeholder='Address' />
              <input className='bg-[#F4F4FC] border-b-2 border-[#BFC5E0]' type="text" placeholder='Appaetnentment,suit,e.t.c (optinal)' />
              <input className='bg-[#F4F4FC] border-b-2 border-[#BFC5E0]' type="text" placeholder='City' />
           </div>
              <div className='flex justify-between'>
                <input className='bg-[#F4F4FC] border-b-2 border-[#BFC5E0] w-[336px]' type="text" placeholder='Bangladesh' />
                <input className='bg-[#F4F4FC] border-b-2 border-[#BFC5E0] w-[336px]' type="text" placeholder='Postal Code' />
              </div>
            </div>
          </div>
        </div>
        <div>
          {basket&& basket.map((e)=>{
            return(
              <div 
              className="flex justify-between mt-[20px] p-4 border-b-2 w-[380px] gap-6 "
              key={e.productId}
            >
              <div className="flex gap-4 ">
                <div className="w-[81px] h-[81px] relative">
                  <img
                    className="min-w-[83px] min-h-[87px]"
                    src={e?.images[1]}
                    alt=""
                  />
            
                </div>
                <p className=" font-extrabold text-[18px] text-[#000000]">
                  {e?.productName}
                </p>
              </div>
              <div className='flex items-center'>
              <p className="text-[#151875] text-[18px] font-bold">
                {e?.price}₮
              </p>
              </div>
            
            </div>
            )
          })}
          <OrderButton totalPrices={totalPrices} totalPrice={totalPrice} onClick={handlePost}/>
        </div>
 </div>
       
        </div>
        
      </div>
      <UserFooter/>
    </>
  )
}

export default Order
