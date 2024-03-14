"use client";
import GeneralInfo from "@/components/GeneralInfo";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import withAuth from "@/components/withAuth";
const DashBoard = () => {
  const {user}= useAuth0()
  console.log(user)
  return (
    <div className="w-screen h-screen bg-gray-200 justify-center items-center">
      <Navbar/>
      <div className="flex gap-6">
        <Sidebar />
        <GeneralInfo />
      </div>
    </div>
  );
};
export default DashBoard;

