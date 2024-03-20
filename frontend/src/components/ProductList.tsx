import Delete from "@/assets/Delete"
import Edit from "@/assets/Edit"
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { useRouter } from "next/navigation";
import { log } from "console";


const ProductList = () => {

  const [selectedProduct, setselectedProduct] = useState<string | null>(null);

  const router = useRouter()
  const movepage = () => {
    router.push(`product`);
  };
  const move = async (product_Id: string) => {
    router.push(`editproduct`);
    const getId = product_Id
    localStorage.setItem( "productId" , getId)
    
   
  };

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/product",
    fetcher
  );

  const deleteHandler = async (productId: string) => {
    try {
      const res = await axios.delete(`http://localhost:8000/product/${productId}`, {
      })
      mutate("http://localhost:8000/product")

    } catch (error) {
      console.log(error)
    }
  }

  function formatDate(dateString:Date) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  return (
    <div className="flex w-full flex-col mt-8  ">
      <div className="flex bg-[#F7F7F8] py-4 justify-between px-40 border-b border-slate-300 rounded-tl-2xl rounded-tr-2xl">
        <p className="w-fit text-sm text-[#3F4145]">Бүтээгдэхүүн</p>
        <p className="w-fit text-sm text-[#3F4145]">Ангилал</p>
        <p className=" w-fit text-sm text-[#3F4145]">Үнэ</p>
        <p className="w-fit text-sm text-[#3F4145]">Үлдэгдэл</p>
        <p className="w-fit text-sm text-[#3F4145]">Зарагдсан</p>
        <p className="w-fit text-sm text-[#3F4145]"> Нэмсэн огноо</p>
      </div>
      {data && data.map((e: any) => {
        return (
          <div key={e._id} className="flex justify-between items-center  bg-[#F7F7F8] py-4  pl-6 border-b border-slate-300 ">
            <input type="checkbox"></input>
            <div className="flex  gap-1 justify-center">
              <div><img className="rounded-3xl" height={"40px"} width={"40px"} src={e.images[1]}></img></div>
              <div className="flex flex-col justify-center items-center" >
                <div className=" font-bold text-sm text-[#3F4145] " >{e.productName}</div>
                <div className="text-[#5E6166] text-[12px]">{e.productId}</div>
              </div>
            </div>
            <div  className=" w-[175px] pl-20 text-sm text-[#3F4145]">{e.mainCategory.mainCategoryName}</div>
            <p className="w-[148px] text-sm text-[#3F4145]">{e.price}</p>
            <p className="w-[185px] text-sm text-[#3F4145]">{e.quantity}</p>
            <p className="w-[195px] text-sm text-[#3F4145]">30</p>
            <p className="pr-10 text-sm text-[#3F4145]">{formatDate(e.createdAt)}</p>

            <div className="flex gap-2 items-center ">
              <button onClick={() => deleteHandler(e._id)} >
                <Delete />
              </button>
              <button onClick={() => move(e._id)}>
                <Edit />
              </button>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default ProductList