"use client";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import GeneralInfoIncome from "@/components/GeneralInfo";
import IconIncome from "../../assets/IconIncome";
import IconOrder from "../../assets/IconOrder"
import IconUser from "../../assets/IconUser"
import App from "@/components/Chart";
import BestSeller from "@/components/BestSeller";
import ActivityCity from "@/components/ActivityCities";
import useSWR from "swr";

const DashBoard = () => {


  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(
    "http://localhost:8000/order",
    fetcher
  );

  const getTotalPrice = () => {
    let totalPrice = 0;
    if (data && data.length > 0) {
      data.forEach((product) => {
        const amount = product?.amountToPaid;
        if (!isNaN(amount)) {
          totalPrice += amount;
        }
      });
    }
    return totalPrice;
  };

  return (
    <div className=" bg-gray-200  items-center">
      <Navbar />
      <div className="flex gap-6 ">
        <Sidebar />
        <div className="flex flex-col  w-screen mt-10 items-center ">
          <div className="flex w-[1200px]  justify-between">
            <div className="text-black w-[374px] h-[136px] px-6 py-4 gap-4 mt-4 rounded-2xl bg-[#FFFFFF]">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center font-bold text-xl">
                  <IconIncome/>
                  <p className="font-normal">Орлого</p>
                </div>
                <h1 className="text-4xl font-bold">{getTotalPrice()}₮</h1>
                <p>Өнөөдөр</p>
              </div>
            </div>
            <GeneralInfoIncome desc="Захиалга" amount="58" date="Өнөөдөр" icon={<IconOrder />} />
            <GeneralInfoIncome desc="Хэрэглэгч" amount="980" date="Өнөөдөр" icon={<IconUser />} />
          </div>
          <div className="flex w-[1200px]  justify-between">
            <BestSeller />
            <div className="flex flex-col gap-8">
              <App />
              <ActivityCity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
