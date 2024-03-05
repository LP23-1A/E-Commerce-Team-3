import GeneralInfo from "@/components/admin/GeneralInfo";
import Sidebar from "@/component/Sidebar";

const DashBoard = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 justify-center items-center">
      <GeneralInfo />
      <Sidebar/>
    </div>
  );
};

export default DashBoard;
