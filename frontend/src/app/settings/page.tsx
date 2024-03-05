import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Settings = () => {
    return(
        <div  className="w-screen h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
            <div>
                <Sidebar/>
            </div>
        </div>
    )
}

export default Settings;