import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';
import CreateProduct from './CreateProduct';
import { useRouter } from 'next/navigation';

const ToggleCreateProduct = () => {

          const router = useRouter()
          
          const addproduct = () => {
          router.push("addproduct")
          }


    return(
        <div>
            <div className="flex border-b border-solid border-slate-300  ">
                        <button className="px-5 py-5 border-b border-solid border-current font-semibold"> Бүтээгдэхүүн</button>
                        <button className="px-5 py-5 text-light">Ангилал</button>
                    </div>
                    <div className="w-[280px] h-[48px] text-white rounded-xl bg-black flex items-center justify-center gap-2 mt-6 ml-5 cursor-pointer" >
                        <AddOutlinedIcon/>
                        <button onClick={addproduct} >Бүтээгдэхүүн нэмэх</button>
                        
                    </div> 
                
        </div>
    )
}

export default ToggleCreateProduct