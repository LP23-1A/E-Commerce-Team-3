import DashBoard from "@/app/dashboard/page"
import Navbar from "../components/Navbar";
import UserNavbar from "@/components/userComponents/Navbar";

export default function Home() {

  return (
    <div className="bg-slate-50 h-auto">
      <UserNavbar/>
      {/* <DashBoard/> */}
    </div>
  )
}
