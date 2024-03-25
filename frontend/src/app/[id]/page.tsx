"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChevronLeft from "@/assets/ChevronLeft";
import ChevronDown from "@/assets/ChevronDown";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from 'next/navigation'
import useSWR from "swr";
import PayDetail from "@/components/PayDetail";
import DeliveryDetail from "@/components/DeliveryDetail";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import formatDate from "@/components/utils/FormatDate";
import statusCellStyle from "@/components/utils/StatusColor";

const OrderDetail = () => {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const pathname = usePathname()
    const router = useRouter()
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/order${pathname}`,
        fetcher
    );
    const handleBack = () => {
        router.push(`order`);
    };
    const getOneTotalPrice = (qty: number, price: number) => {
        return qty * price;
    };
    const getTotalPrice = () => {
        let totalPrice = 0;
        data?.products?.forEach((product: { price: number; }) => {
            totalPrice += product?.price * data?.quantity;
        });
        return totalPrice;
    };
    ;

    return (
        <div className="w-screen h-screen bg-gray-200 justify-center items-center">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col">
                    <div className="flex bg-white h-[56px] pl-5 items-center gap-5 cursor-pointer mt-10 " onClick={handleBack} >
                        <ChevronLeft />
                        <p className="">Захиалгын дэлгэрэнгүй</p>
                    </div>
                    <div className="flex gap-10 ">
                        <div className="bg-white mt-10 w-[627px] h-[800px] rounded-xl py-6 px-5 ml-5 border border-slate-300">
                            <div className="flex items-center justify-between ">
                                <div className="flex flex-col">
                                    <p className="font-extralight">Захиалгын ID дугаар:</p>
                                    <p className="text-xl font-semibold">#{data?.orderNumber}</p>
                                </div>
                                <div style={statusCellStyle(data?.status)} className="flex gap-2 items-center bg-[#ECEDF0] py-2 px-3 rounded-full ">
                                    <button>{data?.status}</button>
                                    <ChevronDown />
                                </div>
                                <div className="flex flex-col pt-14">
                                    <p className="font-extralight">Захиалагч: Хувь хүн</p>
                                    <div className="flex items-center">
                                        <p className="text-base font-semibold">{data?.userId?.username}-</p>
                                        <p className="text-sm font-light"> {data?.userId?.email}, {data?.userId?.phoneNumber}</p>
                                    </div>
                                </div>
                                {
                                    data && data?.products.map((products: any) => (
                                        <div className="flex bg-[#ECEDF0] rounded-lg mt-8">
                                            <img src={products.images[1]} alt="" className="rounded-s-lg w-[180px] h-[156px]" />
                                            <div className="w-full p-4">
                                                <h5 className="text-2xl font-bold"> {products?.productName}</h5>
                                                <p className="font-light mt-2 text-sm">{formatDate(products?.createdAt)}</p>
                                                <p className="font-light text-sm">Бүтээгдэхүүний ID: 30340949903</p>
                                                <div className="flex justify-between items-center mt-6">
                                                    <p className="font-extralight">Тоо ширхэг:{data?.quantity} * {products?.price.toLocaleString()}₮</p>
                                                    <p className="text-base font-semibold">{getOneTotalPrice(data?.quantity, products?.price).toLocaleString()}₮</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="flex flex-col mt-10">
                                <DeliveryDetail data={data} />
                                <PayDetail data={data} totalPrice={getTotalPrice()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail
