"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import IconIncome from "../../assets/IconIncome";
import IconOrder from "../../assets/IconOrder";
import IconUser from "../../assets/IconUser";
import App from "@/components/Chart";
import BestSeller from "@/components/BestSeller";
import ActivityCity from "@/components/ActivityCities";
const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT || '';

const Dashboard = () => {
  const [income, setIncome] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(backendPoint);
        const { incomeData, orderCount, userCount } = response.data.data;

        setIncome(incomeData[0].amountToPaid);
        setOrderCount(orderCount);
        setUserCount(userCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 items-center">
      <Navbar />
      <div className="flex gap-6">
        <Sidebar />
        <div className="flex flex-col w-screen mt-10 items-center">
          <div className="flex w-[1200px] justify-between">
            <DashboardCard
              icon={<IconIncome />}
              title="Орлого"
              value={`${income}₮`}
            />
            <DashboardCard
              icon={<IconOrder />}
              title="Захиалга"
              value={orderCount}
            />
            <DashboardCard
              icon={<IconUser />}
              title="Хэрэглэгч"
              value={userCount}
            />
          </div>
          <div className="flex w-[1200px] justify-between">
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

const DashboardCard = ({ icon, title, value }:any) => {
  return (
    <div className="text-black w-[374px] h-[136px] px-6 py-4 gap-4 mt-4 rounded-2xl bg-[#FFFFFF]">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center font-bold text-xl">
          {icon}
          <p className="font-normal">{title}</p>
        </div>
        <h1 className="text-4xl font-bold">{value}</h1>
        <p>Өнөөдөр</p>
      </div>
    </div>
  );
};

export default Dashboard;
