'use client'
import axios from 'axios'
import { useState } from 'react'
const StatusBar = ({ selectedOrderId,onClick }: any) => {
  const [selected, setSelected] = useState('')
  const status = ["Ordered", "Preparing to ship", "Shipped", "Delivered"]
  const postHandler = async () => {
    try {
      console.log(selected)
      const res = await axios.put(`http://localhost:8000/order/${selectedOrderId}`, {
        status: selected
      })
      onClick(onClick)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='bg-black bg-opacity-70 w-full h-full fixed top-0  z-10 flex justify-center items-center'>
      <div  className='flex flex-col p-5  items-center w-[400px] bg-white rounded-lg'  >
      <select className='p-3 border-2 border-solid rounded-md ' value={selected} onChange={(e) => { setSelected(e.target.value) }} >
      {status.map((e) => (
        <option className='p-2' value={e} key={e} >
          {e}
        </option>
      ))}
    </select>
      <div className='flex gap-4 mt-3'>
        <button className='bg-black text-white  px-6 py-3 rounded-lg' onClick={onClick}>Close</button>
      <button className='bg-black text-white  px-6 py-3 rounded-lg' onClick={postHandler}>Save</button>
      </div>
      </div>

    </div>

  )   
}

export default StatusBar