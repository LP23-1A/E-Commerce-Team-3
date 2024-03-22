import EditProduct from "@/components/EditProduct";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

 const editproduct = () => {
  return(
      <div  className="w-full h-screen bg-gray-200 justify-center items-center">
          <Navbar/>
          <div className="flex  items-start">
              <Sidebar />
             <div className="flex flex-col">
                 <EditProduct/>
             </div>
          </div>
      </div>
  )
}
export default editproduct;