"use client";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import GeneralInfoIncome from "@/components/GeneralInfo";
import IconIncome from "../../assets/IconIncome";
import IconOrder from "../../assets/IconOrder";
import IconUser from "../../assets/IconUser";
import BestSeller from "@/components/BestSeller";
import App from "@/components/Chart";


const DashBoard = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div className=" bg-gray-200 justify-center items-center">
      <Navbar />
      <div className="flex gap-6 ">
        <Sidebar />
        <div className="flex flex-col w-[89%] ">
          <div className="flex items-center justify-around ">
            <GeneralInfoIncome
              desc="Орлого"
              amount="235,000₮"
              date="Өнөөдөр"
              icon={<IconIncome />}
            />
            <GeneralInfoIncome
              desc="Захиалга"
              amount="58"
              date="Өнөөдөр"
              icon={<IconOrder />}
            />
            <GeneralInfoIncome
              desc="Хэрэглэгч"
              amount="980"
              date="Өнөөдөр"
              icon={<IconUser />}
            />
          </div>
          <div className="flex justify-evenly">
            <BestSeller />
            <div className="flex flex-col">
              <App />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
