"use client";
import GeneralInfo from "@/components/GeneralInfo";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
<<<<<<< HEAD
import withAuth from "@/components/withAuth";
import IconOrder from "../../assets/IconOrder"
import IconIncome from "../../assets/IconIncome";
=======
import withAuth from "@/components/Test";
import GeneralInfoIncome from "@/components/GeneralInfo";
import IconIncome from "../../assets/IconIncome";
import IconOrder from "../../assets/IconOrder"
>>>>>>> 1148120 (fixed dashboard cards)
import IconUser from "../../assets/IconUser"

const DashBoard = () => {
  const {user}= useAuth0()
  console.log(user)
  return (
    <div className=" bg-gray-200 justify-center items-center">
      <Navbar/>
      <div className="flex gap-6 ">
        <Sidebar />
<<<<<<< HEAD
       <div className="w-full flex justify-between px-6">
       <GeneralInfo desc="Орлого"  amount="235,000₮" date="Өнөөдөр" icon={<IconIncome/>}/>
        <GeneralInfo desc="Захиалга"  amount="58" date="Өнөөдөр" icon={<IconOrder/>}/>
        <GeneralInfo desc="Хэрэглэгч"  amount="980" date="Өнөөдөр" icon={<IconUser/>}/>
       </div>
=======
        {/* <GeneralInfo /> */}
        <GeneralInfoIncome desc="Орлого" amount="235,000₮" date="Өнөөдөр" icon={<IconIncome/>}/>
        <GeneralInfoIncome desc="Захиалга" amount="58" date="Өнөөдөр" icon={<IconOrder/>}/>
        <GeneralInfoIncome desc="Хэрэглэгч" amount="980" date="Өнөөдөр" icon={<IconUser/>}/>
>>>>>>> 1148120 (fixed dashboard cards)
      </div>
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 753ed5fef16b6c84157d1876643078e14a6f5d8e
export default DashBoard;

