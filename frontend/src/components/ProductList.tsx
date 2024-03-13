import Delete from "@/assets/Delete"
import Edit from "@/assets/Edit"
import { useState } from "react";
import useSWR from "swr";
import ToggleDelete from "./ToggleDelete";


const ProductList = () => {

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const [isDeleteModalShow, setIsDeleteModalShow] = useState(false)


  const deleteProductHandler = (productId: string) => {
    setSelectedProductId(productId)
    setIsDeleteModalShow(!isDeleteModalShow)
    console.log(isDeleteModalShow);

  }

console.log(selectedProductId);


  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/product",
    fetcher
  );

  return (
    <div className="flex w-[1170px] flex-col">
      <div className="flex bg-[#F7F7F8] py-4 justify-between px-20 border-b border-slate-300 rounded-md">
        <p className="w-fit text-sm text-[#3F4145]">Бүтээгдэхүүн</p>
        <p className="w-fit text-sm text-[#3F4145]">Ангилал</p>
        <p className=" w-fit text-sm text-[#3F4145]">Үнэ</p>
        <p className="w-fit text-sm text-[#3F4145]">Үлдэгдэл</p>
        <p className="w-fit text-sm text-[#3F4145]">Зарагдсан</p>
        <p className="w-fit text-sm text-[#3F4145]"> Нэмсэн огноо</p>
      </div>
      {data && data.map((e: any) => {
        return (
          <div key={e._id} className="flex items-center justify-between bg-[#F7F7F8] py-4 gap-24 px-6 border-b border-slate-300 rounded-md">
            <input  type="checkbox"></input>
            <div className="w-fit text-sm text-[#3F4145]" >{e.productName}</div>
            <div className="w-fit text-sm text-[#3F4145]">{e.description}</div>
            <p className="w-fit text-sm text-[#3F4145]">{e.price}</p>
            <p className="w-fit text-sm text-[#3F4145]">{e.quantity}</p>
            <p className="w-fit text-sm text-[#3F4145]">30</p>
            <p className="w-fit text-sm text-[#3F4145]">{e.createdAt}</p>
            
            <div className="flex gap-2 items-center ">
              <button onClick={() => deleteProductHandler(e._id)} >
              <Delete  />
              </button>
              <button>
              <Edit />
              </button>
            </div>
            {/* <ToggleDelete/> */}
            { isDeleteModalShow && selectedProductId === e._id &&( <ToggleDelete selectedProductId={selectedProductId}  onClick={deleteProductHandler} />)}
          </div>
        )
      })}
    </div>
  )
}

export default ProductList