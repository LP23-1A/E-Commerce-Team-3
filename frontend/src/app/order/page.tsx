'use client'
import useSWR from "swr";
import Navbar from "@/components/Navbar";
import OrderHistory from "@/components/OrderHistory";
import OrderNavbar from "@/components/OrderNavbar";
import Sidebar from "@/components/Sidebar";
import OrderDayFilter from "@/components/OrderDayFilter";

const Order = () => {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/order",
        fetcher
      );
    return(
        <div  className="w-screen h-screen bg-gray-200 ">
            <Navbar/>
          <div className="flex  w-screen">
              <Sidebar/>
              <div className="w-screen">
              <OrderNavbar data={data}/>
              <OrderDayFilter/>
          <OrderHistory data={data}/>
              </div>
  
          </div>    
        </div>
    )
}

export default Order;