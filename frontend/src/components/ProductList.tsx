import Delete from "@/assets/Delete"
import Edit from "@/assets/Edit"
import { useState } from "react";
import useSWR from "swr";
import EditProduct from "./EditProduct";
import ToggleDelete from "./ToggleDelete";
import axios from "axios";


const ProductList = () => {

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isDeleteModalShow, setIsDeleteModalShow] = useState(false)
  const [isEditModalShow, setIsEditModalShow] = useState(false)

  const deleteModalHandler = (productId: string) => {
    setSelectedProductId(productId)
    setIsDeleteModalShow(!isDeleteModalShow)
  }

  const editModalHandler = (productId: string) => {
    setSelectedProductId(productId)
    setIsEditModalShow(!isEditModalShow)
  }

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/product",
    fetcher
  );

  const deleteHandler = async () => {
    try {
      const res = await axios.delete(`http://localhost:8000/product/${selectedProductId}`, {
      })

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="flex w-[1170px] flex-col mt-8">
      <div className="flex bg-[#F7F7F8] py-4 justify-between px-20 border-b border-slate-300 rounded-tl-2xl rounded-tr-2xl">
        <p className="w-fit text-sm text-[#3F4145]">Бүтээгдэхүүн</p>
        <p className="w-fit text-sm text-[#3F4145]">Ангилал</p>
        <p className=" w-fit text-sm text-[#3F4145]">Үнэ</p>
        <p className="w-fit text-sm text-[#3F4145]">Үлдэгдэл</p>
        <p className="w-fit text-sm text-[#3F4145]">Зарагдсан</p>
        <p className="w-fit text-sm text-[#3F4145]"> Нэмсэн огноо</p>
      </div>
      {data && data.map((e: any) => {
        return (
          <div key={e._id} className="flex items-center  bg-[#F7F7F8] py-4  pl-6 border-b border-slate-300 ">
            <input  type="checkbox"></input>
            <div className=" pl-11 text-sm text-[#3F4145] w-[254px]" >{e.productName}</div>
            <div className="w-[175px] text-sm text-[#3F4145]">{e.description}</div>
            <p className="w-[148px] text-sm text-[#3F4145]">{e.price}</p>
            <p className="w-[185px] text-sm text-[#3F4145]">{e.quantity}</p>
            <p className="w-[195px] text-sm text-[#3F4145]">30</p>
            <p className="pr-10 text-sm text-[#3F4145]">2024.01.20</p>
            
            <div className="flex gap-2 items-center ">
              <button onClick={deleteHandler} >
              <Delete  />
              </button>
              <button onClick={() => editModalHandler(e.id)}>
              <Edit />
              </button>
            </div>
            { isEditModalShow && selectedProductId === e._id &&( <EditProduct selectedProductId={selectedProductId}  onClick={editModalHandler} />)}
            {/* { isDeleteModalShow && selectedProductId === e._id &&( <ToggleDelete selectedProductId={selectedProductId}  onClick={deleteModalHandler} />)} */}
          </div>
        )
      })}
    </div>
  )
}

export default ProductList