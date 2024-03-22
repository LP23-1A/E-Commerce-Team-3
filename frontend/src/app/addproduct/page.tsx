import CreateProduct from "@/components/CreateProduct";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

 const addproduct = () => {
  return(
      <div  className="w-full h-screen bg-gray-200 justify-center items-center">
          <Navbar/>
          <div className="flex  items-start">
              <Sidebar />
             <div className="flex flex-col">
                 <CreateProduct/>
             </div>
          </div>
      </div>
  )
}
export default addproduct;