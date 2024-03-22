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

  if (isLoading) {
    return <div>Loading...</div>;
  }
if (error) {
  return <div>Error</div>
  
}
  return (
    <div className="w-screen h-screen bg-gray-200 ">
      <Navbar />
      <div className="flex  w-screen">
        <Sidebar />
        <div className="flex w-full flex-col p-6">x
          <OrderNavbar data={data} />
          <div className="mt-8 pr-6">
            <OrderDayFilter />
            <OrderHistory data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
