"use client"

import axios from "axios"
import { useState } from "react"

const ToggleDelete = ({ onClick, selectedProductId }: any) => {

console.log(selectedProductId);

  const deleteHandler = async () => {
    try {
      const res = await axios.delete(`http://localhost:8000/product/${selectedProductId}`, {
      })
     
      onClick(onClick)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col gap-4 mt-3 justify-center items-center bg-[#fff] rounded-xl p-2'>
      <p>Are you sure?</p>
      <div className="flex gap-1">
        <button className='bg-black text-white  px-6 py-3 rounded-lg' onClick={onClick}>No</button>
        <button className='bg-black text-white  px-6 py-3 rounded-lg' onClick={deleteHandler}>Yes</button>
      </div>
    </div>
  )
}

export default ToggleDelete