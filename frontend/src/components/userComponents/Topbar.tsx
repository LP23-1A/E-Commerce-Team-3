import { Button } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import {useRouter} from "next/navigation"

const Topbar = ({selectedCategory}:any) => {
    const router = useRouter()

    const handleCategory = () => {
        router.push("/user/category")
    } 

    const handleHome = () => {
        router.push("/")
    }
 
    return (
        <div className="flex flex-col   ">
            <div className="flex items-center px-[340px] justify-between py-6">
               <div className="flex gap-20">
               <p className="text-[#0D0E43] text-[34px] font-bold font-sans">Ecommerce</p>
                <div className="flex items-center gap-10">
                    <div onClick={handleHome} className="flex items-center text-[#FB2E86] hover:[#FB2E86]">
                        <button>Нүүр</button>
                        <ExpandMoreIcon/>
                    </div>
                    <p onClick={handleCategory} className="text-#0D0E43 ">Ангилал</p>
                </div>
               </div>
               <div className="flex items-center w-[377px] h-[44px] bg-[#FFFFFF]  rounded-sm">
                <input type="text"  className="w-[235px] h-[39px] pl-4 border-[3px] border-[#E7E6EF]" />
                <div className="w-[51.95px] py-1 pl-1  h-[40px] bg-[#FB2E86] text-white items-center justify-center">
                    <SearchIcon sx={{fontSize:40}} />
                </div>
            </div>
            </div>
           <div className="bg-[#F6F5FF] flex gap-6 py-10 px-[340px]">
            <p>Home</p>
            <p className="text-[#FB2E86]">{ selectedCategory}</p>
           </div>
        </div>
    )
}
export default Topbar