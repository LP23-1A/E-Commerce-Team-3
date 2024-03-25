import Facebook from "@/assets/Facebook"

export const UserFooter = () => {
    return (
        <div className="bg-[#EEEFFB] h-[479px] w-screen flex flex-col">
            <div className="max-w-[1200px] flex justify-start gap-28  mx-auto h-[479px] ">
                <div className="flex flex-col gap-6 mt-28">
                    <h1 className="text-4xl font-extrabold">eCommerce</h1>
                    <div className="flex items-center w-[377px] h-[44px] bg-[#FFFFFF] justify-between rounded-sm">
                        <input type="text" placeholder="Имэйл хаяг" className="w-[235px] h-[39px] pl-4 outline-none" />
                        <button className="bg-[#FB2E86] text-white flex justify-center items-center w-[135px] h-[39px] rounded-sm">Бүртгүүлэх</button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[#8A8FB9] text-base font-normal">Хаяг</span>
                        <p className="text-[#8A8FB9] text-base font-normal">Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,<br></br> Гурван гол - 401 тоот</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-28">
                    <h1 className="text-2xl font-extrabold">Ангилал</h1>
                    <div className="flex flex-col gap-4">
                        <span className="text-[#8A8FB9] text-base font-normal">Хувцас</span>
                        <span className="text-[#8A8FB9] text-base font-normal">Камер, хэрэгсэл</span>
                        <span className="text-[#8A8FB9] text-base font-normal">Ухаалаг утас, таблет</span>
                        <span className="text-[#8A8FB9] text-base font-normal">Чихэвч</span>
                        <span className="text-[#8A8FB9] text-base font-normal">Гэр ахуйн бараа</span>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-28">
                    <h1 className="text-2xl font-extrabold">Бусад</h1>
                    <div className="flex flex-col gap-4">
                        <span className="text-[#8A8FB9] text-base font-normal">Бидний тухай</span>
                        <span className="text-[#8A8FB9] text-base font-normal">Холбоо барих</span>
                        <span className="text-[#8A8FB9] text-base font-normal">Түгээмэл асуулт хариулт</span>
                    </div>
                </div>
            </div>
            <div className="bg-[#E7E4F8]">
                <div className="max-w-[1100px] mx-auto flex justify-between items-center h-[53px]">
                    <span className="text-[#9DA0AE] flex items-center">©ecommerce</span>
                    <div>
                        <Facebook/>
                    </div>
                </div>
            </div>
        </div>
    )
}