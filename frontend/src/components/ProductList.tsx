import Delete from "@/assets/Delete"
import Edit from "@/assets/Edit"
import useSWR, { mutate } from "swr";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const ProductList = ({selectedCategory}:any) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  
  const router = useRouter()

  const move = async (product_Id: string) => {
    router.push(`editproduct`);
    const getId = product_Id
    localStorage.setItem( "productId" , getId)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/product");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    // Filter products based on selected category
    if (selectedCategory === "эрэгтэй") {
      setFilteredProducts(products.filter((product: any) => product.mainCategory.mainCategoryName === "эрэгтэй"));
    } else if (selectedCategory === "эмэгтэй") {
      setFilteredProducts(products.filter((product: any) => product.mainCategory.mainCategoryName === "эмэгтэй"));
    } else if (selectedCategory === "хүүхэд") {
      setFilteredProducts(products.filter((product: any) => product.mainCategory.mainCategoryName === "хүүхэд"));
    } else if( selectedCategory === "цахилгаан бараа") {
      setFilteredProducts(products.filter((product:any) => product.mainCategory.mainCategoryName === "цахилгаан бараа"));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);
  
  const deleteHandler = async (productId: string) => {
    try {
      const res = await axios.delete(`http://localhost:8000/product/${productId}`, {
      })
      setFilteredProducts(filteredProducts.filter((product:any) => product._id !== productId));
      mutate("http://localhost:8000/product")

    } catch (error) {
      console.log(error)
    }
  }

  function formatDate(dateString:Date) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  if (Loading) {
    return <div>Loading...</div>;
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
      {filteredProducts.length === 0 ? (   <div>No products found.</div>) :(
       filteredProducts.map((product :any) => { 
        return (
          <div key={product._id} className="flex justify-between items-center  bg-[#F7F7F8] py-4  pl-6 border-b border-slate-300 ">
            <input type="checkbox"></input>
            <div className="flex  gap-1 justify-center">
              <div><img className="rounded-3xl" height={"40px"} width={"40px"} src={product.images[1]}></img></div>
              <div className="flex flex-col justify-center items-center" >
                <div className=" font-bold text-sm text-[#3F4145] " >{product.productName}</div>
                <div className="text-[#5E6166] text-[12px]">{product.productId}</div>
              </div>
            </div>
            <div  className=" w-[175px] pl-20 text-sm text-[#3F4145]">{product.mainCategory.mainCategoryName}</div>
            <p className="w-[148px] text-sm text-[#3F4145]">{product.price}</p>
            <p className="w-[185px] text-sm text-[#3F4145]">{product.quantity}</p>
            <p className="w-[195px] text-sm text-[#3F4145]">30</p>
            <p className="pr-10 text-sm text-[#3F4145]">{formatDate(product.createdAt)}</p>

            <div className="flex gap-2 items-center ">
              <button onClick={() => deleteHandler(product._id)} >
                <Delete />
              </button>
              <button onClick={() => move(product._id)}>
                <Edit />
              </button>
            </div>

          </div>
        )
      })
      ) }
    </div>
  )
}

export default ProductList