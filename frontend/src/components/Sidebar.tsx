"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import IconOne from "@/assets/SVG";
import SetSVG from "@/assets/SettingsSVG";
import ProSVG from "@/assets/ProSvg";
import OrdSVG from "@/assets/Ordsvg";
import IncSVG from "@/assets/Incsvg";

const pages = ['dashboard', 'order', 'income', 'product', 'settings'];
const icons = [<IconOne/>, <SetSVG/>, <ProSVG/>, <OrdSVG/>, <IncSVG/>];
const pageNames = ['Хяналтын самбар', 'Захиалга', 'Орлого', 'Бүтээгдэхүүн', 'Тохиргоо'];

const Sidebar = () => {
    const router = useRouter();
    const handleNavigation = (page: string) => {
        router.push(page);
    };

    return (
        <div className="relative w-[222px] bg-white h-screen pt-10">
            <div className="flex flex-col gap-[16px] pt-4">
                {pages.map((page, index) => (
                    <div className="hover:bg-[#F6F6F6]" key={index}>
                        <div className="flex gap-4 items-center ml-[15px] my-2" onClick={() => handleNavigation(page)}>
                            {icons[index]}
                            <button>{pageNames[index]}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Sidebar;


