"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChevronLeft from "@/assets/ChevronLeft";
import ChevronDown from "@/assets/ChevronDown";
import image from "../../assets/Image.png"
import Car from "@/assets/Car";
import { useRouter } from "next/navigation";

const OrderDetail = () => {

    const router = useRouter()
    const o = () => {
        router.push(`order`);
    };

    return(
        <div  className="w-screen h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
            <div className="flex">
              <Sidebar/>
              <div className="flex flex-col">
                <div className="flex bg-white h-[56px] pl-5 items-center gap-5 cursor-pointer " onClick={o} >
                    <ChevronLeft />
                    <p className="">Захиалгын дэлгэрэнгүй</p>
                </div>
                <div className="flex gap-10">
                    <div className="bg-white mt-10 w-[627px] h-[800px] rounded-xl py-6 px-5 ml-5 border border-slate-300">
                        <div className="flex items-center justify-between ">
                            <div className="flex flex-col">
                                <p className="font-extralight">Захиалгын ID дугаар:</p>
                                <p className="text-xl font-semibold">#12345678</p>
                            </div>
                            <div className="flex gap-2 items-center bg-[#ECEDF0] py-2 px-3 rounded-full ">
                                <button>Бэлтгэгдэж байна</button>
                                <ChevronDown/>
                            </div>
                        </div>
                        <div className="flex flex-col pt-14">
                            <p className="font-extralight">Захиалагч: Хувь хүн</p>
                            <div className="flex items-center">
                                <p className="text-base font-semibold">Solongo Zoloo-</p>
                                <p className="text-sm font-light"> Zoloosoko0526@gmail.com, 99999999</p>
                            </div>
                        </div>
                        <div className="flex bg-[#ECEDF0] rounded-lg mt-8">
                            <img src={image.src} alt="" className="rounded-s-lg"/>
                            <div className="w-full p-4">
                                <h5 className="text-2xl font-bold">WOMEN'S HORSEBIT MULE</h5>
                                <p className="font-light mt-2 text-sm">2024-01-20</p>
                                <p className="font-light text-sm">Бүтээгдэхүүний ID: 30340949903</p>
                                <div className="flex justify-between items-center mt-6">
                                    <p className="font-extralight">Тоо ширхэг:3 * ₮225,800</p>
                                    <p className="text-base font-semibold">₮677,400</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                        <div className="bg-white w-[519px] h-auto rounded-xl border border-slate-300 pb-4">
                            <div className="border-b border-inherit-300">
                                <p className="py-4 px-6">Хүргэлтийн мэдээлэл</p>
                            </div>
                            <p className="pt-8 px-6 font-light text-base">Гэр</p>
                            <p className="px-6 text-base font-semibold">Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts 6r darvar</p>
                        </div>
                        <div className="bg-white w-[519px] h-auto rounded-xl border border-slate-300 mt-10 pb-4">
                            <div className="border-b border-inherit-300">
                                <p className="py-4 px-6">Төлбөрийн мэдээлэл</p>
                            </div>
                            <p className="pt-8 px-6 font-light text-base">Бүтээгдэхүүн</p>
                            <div className="flex flex-col gap-4 px-6 py-3 border-b ">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-8">
                                        <p  className="text-[#3F4145]">WOMEN'S HORSEBIT MULE...</p>
                                        <p  className="text-[#3F4145] text-sm">x3</p>
                                    </div>
                                    <p  className="text-[#3F4145]">₮677,400</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-48 items-center">
                                        <p className="text-[#3F4145]">Хүргэлт</p>
                                        <Car/>
                                    </div>
                                    <p  className="text-[#3F4145]">₮5,000</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-6 py-3">
                                <p className="font-semibold text-base">Нийт төлсөн дүн</p>
                                <p  className="font-semibold text-base">₮677,400</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default OrderDetail;