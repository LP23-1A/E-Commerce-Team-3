import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Product = () => {
    return(
        <div  className="w-screen h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
            <div className="flex  items-start">
                <Sidebar />
                <div className="flex flex-col">
                    <div className="flex border-b border-solid border-slate-300  ">
                        <button className="px-5 py-5 border-b border-solid border-current font-semibold"> Бүтээгдэхүүн</button>
                        <button className="px-5 py-5 text-light">Ангилал</button>
                    </div>
                    <div className="w-[280px] h-[48px] text-white rounded-xl bg-black flex items-center justify-center gap-2 mt-6 ml-5">
                        <AddOutlinedIcon/>
                        <button>Бүтээгдэхүүн нэмэх</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;