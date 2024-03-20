'use client'
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import withAuth from "@/components/withAuth";
import useSWR from "swr";
import formatDate from "@/components/utils/FormatDate";

const Income = () => {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data, error, isLoading } = useSWR(
      "http://localhost:8000/order",
      fetcher
    );
    const getTotalPrice = () => {
        let totalPrice = 0;
        data?.forEach((product) => {
            totalPrice += product.amountToPaid * product.quantity;
        });
        return totalPrice;}
        
    return(
        <div  className="w-screen h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
            <div className="flex ">
                 <Sidebar/>
                <div className="flex flex-col items-center mt-5 ml-40 py-10">
                    <div className="bg-white w-[1200px] h-[160px] rounded-xl">
                        <div className="flex justify-between p-6 border-b-[1px] items-center">
                            <h2 className="text-xl font-semibold text-[#121316]">Орлого</h2>
                            <button className="w-[144px] h-[36px] rounded-lg bg-[#E4E7EB]">Хуулга татах</button>
                        </div>
                        <div className="flex justify-between p-6 items-center w-[724px]">
                            <h2 className="text-3xl font-semibold text-[#121316]">{getTotalPrice()}</h2>
                            <div className="flex gap-2">
                                <button className="text-white bg-[#18BA51] w-[94px] h-[36px] rounded-lg">Өнөөдөр</button>
                                <button className="w-[82px] h-[36px] rounded-lg border-[1px]">7 хоног</button>
                                <button className="w-[132px] h-[36px] rounded-lg border-[1px]">Сараар</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-5 ">
                       <div className="bg-white  h-auto rounded-xl py-4 w-[724px]">
                            <div className="flex py-3 px-6 border-b-[1px] items-center">
                                <p className="text-xs font-normal text-[#3F4145] w-[169px]">Захиалгын ID дугаар</p>
                                <p className="text-xs font-normal text-[#3F4145] w-[268px] px-6">Захиалагч</p>
                                <p className="text-xs font-normal text-[#3F4145] w-[137px] px-6">Төлбөр</p>
                                <p className="text-xs font-normal text-[#3F4145] w-[150px] px-6">Огноо</p>
                            </div>
                            <div>
                                    {data && data.map((e, index) => (
                                        <div className="flex justify-between py-2 " key={index}>
                                          <p className="text-xs font-normal text-[#3F4145] w-[150px] px-6">#{e.orderNumber}</p>
                                          <p className="text-xs font-normal text-[#3F4145] w-[150px] px-6">{e.userId.email}</p>
                                          <p className="text-xs font-normal text-[#3F4145] w-[150px] px-8">{e.amountToPaid}₮</p>
                                          <p className="text-xs font-normal text-[#3F4145] w-[150px] px-6" >{formatDate(e.createdAt)}</p>
                                        </div>
                                      ))}
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income;