"use client";
import { useState } from "react";
import { useOrderFilter } from "./OrderByStatusProvider";

const OrderNavbar = ({ data }: any) => {
  const { setStatusFilter } = useOrderFilter();
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setSelectedStatus(status);
  };
  return (
    <div className="flex  justify-between border-b pt-[20px] border-slate-300 ">
      <button
        className={`p-[16px] text-[14px] ${
          selectedStatus === "" ? "border-b border-black" : "border-b  "
        }`}
        onClick={() => handleStatusFilter("")}
      >
        Бүгд
      </button>
      <button
        className={`p-[16px] text-[14px] font-normal ${
          selectedStatus === "new" ? "border-b  border-black" : "border-b  "
        }`}
        onClick={() => handleStatusFilter("new")}
      >
        Шинэ захиалага
      </button>
      <button
        className={`p-[16px] text-[14px] font-normal ${
          selectedStatus === "Preparing to ship"
            ? "border-b  border-black"
            : "border-b  "
        }`}
        onClick={() => handleStatusFilter("Preparing to ship")}
      >
        Бэлтгэгдэж байна
      </button>
      <button
        className={`p-[16px] text-[14px] font-normal ${
          selectedStatus === "Shipped" ? "border-b  border-black" : "border-b  "
        }`}
        onClick={() => handleStatusFilter("Shipped")}
      >
        Хүргэлтэнд гарсан
      </button>
      <button
        className={`p-[16px] text-[14px] font-normal ${
          selectedStatus === "Delivered"
            ? "border-b  border-black"
            : "border-b  "
        }`}
        onClick={() => handleStatusFilter("Delivered")}
      >
        Хүргэгдсэн
      </button>
      <button
        className={`p-[16px] text-[14px] font-normal ${
          selectedStatus === "Cancelled"
            ? "border-b  border-black"
            : "border-b  "
        }`}
        onClick={() => handleStatusFilter("Cancelled")}
      >
        Цуцлагдсан
      </button>
    </div>
  );
};

export default OrderNavbar;
