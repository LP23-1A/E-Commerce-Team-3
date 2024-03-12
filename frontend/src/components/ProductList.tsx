import Delete from "@/assets/Delete"
import Edit from "@/assets/Edit"


const ProductList = () => {
    return(
    <div className="flex flex-col">  
        <div className="flex bg-[#F7F7F8] py-4 justify-between px-20 border-b border-slate-300 rounded-md">
            <p className="w-fit text-sm text-[#3F4145]">Бүтээгдэхүүн</p>
            <p className="w-fit text-sm text-[#3F4145]">Ангилал</p>
            <p className=" w-fit text-sm text-[#3F4145]">Үнэ</p>
            <p className="w-fit text-sm text-[#3F4145]">Үлдэгдэл</p>
            <p className="w-fit text-sm text-[#3F4145]">Зарагдсан</p>
            <p className="w-fit text-sm text-[#3F4145]"> Нэмсэн огноо</p>
        </div>
      <div className="flex items-center bg-[#F7F7F8] py-4 gap-24 px-6 border-b border-slate-300 rounded-md">
        <input type="checkbox"></input>
        <div className="w-fit text-sm text-[#3F4145]" >Laptop цүнх</div>
        <div className="w-fit text-sm text-[#3F4145]">Эмэгтэй, цүнх</div>
        <p className="w-fit text-sm text-[#3F4145]">19,000₮</p>
        <p className="w-fit text-sm text-[#3F4145]">76</p>
        <p className="w-fit text-sm text-[#3F4145]">30</p>
        <p className="w-fit text-sm text-[#3F4145]">2024-01-10</p>
        <div className="flex items-center">
            <Delete/>
            <Edit/>
        </div>
      </div>
      </div>
    )
    }
    
    export default ProductList