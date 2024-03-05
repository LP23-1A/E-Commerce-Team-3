"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import IconOne from "@/assets/SVG";
import SetSVG from "@/assets/SettingsSVG";
import ProSVG from "@/assets/ProSvg";
import OrdSVG from "@/assets/Ordsvg";
import IncSVG from "@/assets/Incsvg";

const pages = ['Хяналтын самбар', 'Захиалга', 'Орлого' , 'Тохиргоо'];

const Sidebar = () => {

    const [isActive, setIsActive] = useState(0);

    const handleColor = (index: number) => {
     setIsActive(index)
   };

    const router = useRouter()
    const movepage = () => {
        router.push(`dashboard`);
    };
    const move = () => {
        router.push(`order`);
    };
    const change = () => {
        router.push(`income`);
    };
    const a = () => {
        router.push(`product`);
    };
    const b = () => {
        router.push(`settings`);
    };
    const [expanded, setExpanded] = useState(true)
    return (
        <div className="w-[222px] bg-white h-screen">
            <div className="flex flex-col gap-[16px] pt-4">
                <div className="hover:bg-[#F6F6F6]">
                    <div className="flex gap-4 items-center ml-[15px] my-2" onClick={movepage}>
                        <IconOne />
                        <button>Хяналтын самбар</button>
                    </div>
                </div>
                <div className="hover:bg-[#F6F6F6]">
                    <div className=" flex gap-4 items-center ml-[15px] my-2" onClick={move}>
                        <OrdSVG />
                        <button>Захиалга</button>
                    </div>
                </div>
                <div className="hover:bg-[#F6F6F6]">
                    <div className="flex gap-4 items-center ml-[15px] my-2" onClick={change}>
                        <IncSVG />
                        <button>Орлого</button>
                    </div>
                </div>
                <div className="hover:bg-[#F6F6F6]">
                     <div className="flex gap-4 items-center ml-[15px] my-2" onClick={a}>
                        <ProSVG />
                         <button>Бүтээгдэхүүн</button>
                     </div>
                </div>
                <div className="hover:bg-[#F6F6F6]">
                    <div className="flex gap-4 items-center ml-[15px] my-2" onClick={b}>
                         <SetSVG />
                         <button>Тохиргоо</button>
                     </div>
                 </div>
        </div>
        </div >
    )
}

export default Sidebar;