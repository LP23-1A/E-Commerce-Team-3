import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Order = () => {
    return(
        <div  className="w-screen h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
          <div>
              <Sidebar/>
          </div>
        </div>
    )
}

export default Order;