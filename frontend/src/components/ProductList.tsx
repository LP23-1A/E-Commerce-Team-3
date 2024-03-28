import React, { useEffect, useMemo, useState } from "react";
import Delete from "@/assets/Delete";
import Edit from "@/assets/Edit";
import axios from "axios";
import { mutate } from "swr";
import { useRouter } from "next/navigation"

const ProductList = ({ productsData }: any) => {
 
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const router = useRouter()

  useEffect(() => {
    setLoading(false);
  }, [productsData]);
  

  const move = async (productId: string) => {
    router.push("/editproduct")
    const getId = productId
    localStorage.setItem("productId", getId)
  };

  const deleteHandler = async (productId: string) => {
    try {
      const res = await axios.delete(`http://localhost:8000/product/${productId}`);
      if (res.status === 200) {
        mutate("http://localhost:8000/product");
      } 
      
    } catch (error) {
    }
  };

  function formatDate(dateString: Date) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }


  const filteredProducts = useMemo(() => {
    let filtered = productsData;

    if (selectedCategory) {
      filtered = filtered.filter((product: any) => product.mainCategory.mainCategoryName === selectedCategory);
    }
    if (selectedPrice) {
      filtered = filtered.filter((product: any) => product.price === selectedPrice);
    }
    if (selectedMonth) {
      filtered = filtered.filter((product: any) => formatDate(product.createdAt).split('/')[0] === selectedMonth);
    }

    return filtered;
  }, [productsData, selectedCategory, selectedPrice, selectedMonth]);
 
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full flex-col mt-8">
      <div className="flex bg-[#F7F7F8] py-4 justify-between px-40 border-b border-slate-300 rounded-tl-2xl rounded-tr-2xl">
        <p className="w-fit text-sm text-[#3F4145]">Бүтээгдэхүүн</p>
        <p className="w-fit text-sm text-[#3F4145]">Ангилал</p>
        <p className="w-fit text-sm text-[#3F4145]">Үнэ</p>
        <p className="w-fit text-sm text-[#3F4145]">Үлдэгдэл</p>
        <p className="w-fit text-sm text-[#3F4145]">Зарагдсан</p>
        <p className="w-fit text-sm text-[#3F4145]">Нэмсэн огноо</p>
      </div>
      {filteredProducts.length === 0 ? (
        <div>No products found.</div>
      ) : (
        filteredProducts.map((product: any) => {
          return (
            <div key={product._id} className="flex justify-between items-center bg-[#F7F7F8] py-4 pl-6 border-b border-slate-300">
              <input type="checkbox"></input>
              <div className="flex gap-1 justify-center">
                <div><img className="rounded-3xl" height={"40px"} width={"40px"} src={product.images[1]} alt="Product" /></div>
                <div className="flex flex-col justify-center items-center">
                  <div className="font-bold text-sm text-[#3F4145]">{product.productName}</div>
                  <div className="text-[#5E6166] text-[12px]">{product.productId}</div>
                </div>
              </div>
              <div className="w-[175px] pl-20 text-sm text-[#3F4145]">{product.mainCategory.mainCategoryName}</div>
              <p className="w-[148px] text-sm text-[#3F4145]">{product.price}</p>
              <p className="w-[185px] text-sm text-[#3F4145]">{product.quantity}</p>
              <p className="w-[195px] text-sm text-[#3F4145]">30</p>
              <p className="pr-10 text-sm text-[#3F4145]">{formatDate(product.createdAt)}</p>
              <div className="flex gap-2 items-center">
                <button onClick={() => deleteHandler(product._id)}>
                  <Delete />
                </button>
                <button onClick={() => move(product._id)}>
                  <Edit />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductList;
