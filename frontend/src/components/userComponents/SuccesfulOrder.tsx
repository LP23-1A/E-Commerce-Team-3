import Check from '@/assets/Check'
import Clock from '@/assets/Clock'
import List from '@/assets/List'
import React from 'react'

const SuccesfulOrder = () => {
  return (
    <div>
        <Clock/>
      <div className=' flex items-center flex-col'>
    <Check/>
        <p>Таны захиалга амжилттай</p>
        <p>Thank you for your order! Your order is being processed and will be completed within 3-6
hours. You will receive an email confirmation when your order is completed.
</p>
<button>Үргэлжлүүлэх</button>
      </div>
      <div className=' flex justify-end items-end'>
      <List/>

      </div>
    </div>
  )
}

export default SuccesfulOrder
