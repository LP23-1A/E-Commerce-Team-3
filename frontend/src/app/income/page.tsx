'use client'
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import withAuth from "@/components/withAuth";

const Income = () => {
    return(
        <div  className="w-screen h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
            <div className="flex">
                 <Sidebar/>
                <div className="flex flex-col items-center mt-5 ml-40">
                    <div className="bg-white w-[1200px] h-[160px] rounded-xl">
                        <div className="flex justify-between p-6 border-b-[1px] items-center">
                            <h2 className="text-xl font-semibold text-[#121316]">Орлого</h2>
                            <button className="w-[144px] h-[36px] rounded-lg bg-[#E4E7EB]">Хуулга татах</button>
                        </div>
                        <div className="flex justify-between p-6 items-center">
                            <h2 className="text-3xl font-semibold text-[#121316]">235,000₮</h2>
                            <div className="flex gap-2">
                                <button className="text-white bg-[#18BA51] w-[94px] h-[36px] rounded-lg">Өнөөдөр</button>
                                <button className="w-[82px] h-[36px] rounded-lg border-[1px]">7 хоног</button>
                                <button className="w-[132px] h-[36px] rounded-lg border-[1px]">Сараар</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-5 ">
                       <div className="bg-white w-[1200px] h-[160px] rounded-xl">
                            <div className="flex py-3 px-6 border-b-[1px] items-center">
                                <p className="text-xs font-normal text-[#3F4145] w-[169px]">Захиалгын ID дугаар</p>
                                <p className="text-xs font-normal text-[#3F4145] w-[268px] px-6">Захиалагч</p>
                                <p className="text-xs font-normal text-[#3F4145] w-[137px] px-6">Төлбөр</p>
                                <p className="text-xs font-normal text-[#3F4145] w-[150px] px-6">Огноо</p>
                            </div>
                            <div>

                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income;