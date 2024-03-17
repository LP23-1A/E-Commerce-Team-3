"use client";
import GeneralInfo from "@/components/GeneralInfo";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import IconIncome from "../../assets/IconIncome";
import IconOrder from "../../assets/IconOrder"
import IconUser from "../../assets/IconUser"

const DashBoard = () => {
  const {user}= useAuth0()
  console.log(user)
  return (
    <div className=" bg-gray-200 justify-center items-center">
      <Navbar/>
      <div className="flex gap-6 ">
        <Sidebar />
       <div className="w-full flex justify-between px-6">
       <GeneralInfo desc="Орлого"  amount="235,000₮" date="Өнөөдөр" icon={<IconIncome/>}/>
        <GeneralInfo desc="Захиалга"  amount="58" date="Өнөөдөр" icon={<IconOrder/>}/>
        <GeneralInfo desc="Хэрэглэгч"  amount="980" date="Өнөөдөр" icon={<IconUser/>}/>
       </div>
      </div>
    </div>
  );
};

export default DashBoard;

