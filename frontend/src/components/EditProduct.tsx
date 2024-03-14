"use client"
import axios from "axios"
import { useState } from "react"


const EditProduct = ({ onClick, selectedProductId }: any) => {

    const [input, setInput] = useState({
        productName: "",
        description: "",
        price: "",
        quantity: "",
        categoryId: "",
        image: "",
        product_id:""   
     })

    const keys = {
        productName: input.productName,
        description: input.description,
        price: input.price,
        quantity: input.quantity,
        categotyId: input.categoryId,
        image: input.image,
        product_id:input.product_id
    }

    const editProduct = async () => {
        try {
            const res = await axios.put(`http://localhost:8000/product/${selectedProductId}`, {...keys })
            onClick(onClick)
        } catch (error) {
            
        }

    }

    return (
        <div className="flex w-fit flex-col gap-4 bg-[#fffffF] justify-center items-center p-4 rounded-xl">
            <p className="font-bold text-2xl">Бүтээгдэхүүн шинэчлэх</p>
            <div className="flex flex-col p-2 gap-1 ">
                <p>Бүтээгдэхүүний нэр</p>
                <input value={input.productName} onChange={(e) => setInput((prev) => ({ ...prev, productName: e.target.value }))} placeholder="Бүтээгдэхүүний нэр" className="bg-[#F7F7F8] rounded-lg p-2"></input>
            </div>
            <div>
                <p>Нэмэлт мэдээлэл</p>
                <input value={input.description} onChange={(e) => setInput((prev) => ({ ...prev, description: e.target.value }))} placeholder="Нэмэлт мэдээлэл" className="bg-[#F7F7F8] rounded-lg p-2"></input>
            </div>
            <div>
                <p>Барааны код</p>
                <input value={input.product_id} onChange={(e) => setInput((prev) => ({ ...prev, product_id: e.target.value }))} placeholder="Нэмэлт мэдээлэл" className="bg-[#F7F7F8] rounded-lg p-2"></input>
            </div>
            <div>
                <p>Үндсэн үнэ</p>
                <input value={input.price} onChange={(e) => setInput((prev) => ({ ...prev, price: e.target.value }))} placeholder="Үндсэн үнэ" className="bg-[#F7F7F8] rounded-lg p-2"></input>
            </div>
            <div>
                <p>Үлдэгдэл тоо ширхэг</p>
                <input value={input.quantity} onChange={(e) => setInput((prev) => ({ ...prev, quantity: e.target.value }))} placeholder="Үлдэгдэл тоо ширхэг" className="bg-[#F7F7F8] rounded-lg p-2"></input>
            </div>
            <div className="flex gap-1">
                <button onClick={editProduct} className='bg-black text-white  px-6 py-3 rounded-lg'>шинэчлэх</button>
                <button onClick={onClick} className='bg-black text-white  px-6 py-3 rounded-lg' >Буцах</button>
            </div>
        </div>
    )
}

export default EditProduct