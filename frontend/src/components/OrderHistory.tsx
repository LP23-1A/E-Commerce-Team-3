"use client";
import axios from "axios";
import { useState } from "react";
import StatusBar from "./StatusBar";
import ChevronRight from "@/assets/ChevronRight";
import { useRouter } from "next/navigation";
import { useOrderFilter } from "./OrderByStatusProvider";
import { useInputOrderFilter } from "./OrderFilterProvider";
import formatTime from "./utils/FormatTime";
import formatDate from "./utils/FormatDate";
const OrderHistory = ({ data }: any) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [statusModal, setStatusModal] = useState(false);
  const { filters } = useInputOrderFilter();
  const { statusFilter } = useOrderFilter();

  const week = new Date();
  week.setDate(week.getDate() - 7);
  const month = new Date()
  month.setDate(month.getDate() - 30)

  const filterByDay = (order, filters) => {
    return !filters.filterByDay || formatDate(order.createdAt) === formatDate(new Date());
  };

  const filterByUsername = (order, filters) => {
    return !filters.filterByUsername || order.userId.email.toLowerCase().includes(filters.filterByUsername.toLowerCase());
  };

  const filterByStatus = (order, statusFilter) => {
    return !statusFilter || order.status === statusFilter;
  };

  const filterByWeek = (order, filters, week) => {
    const orderDate = new Date(order.createdAt);
    return !filters.filterByWeek || orderDate.getTime() >= week.getTime();
  };

  const filterByMonth = (order, filters, month) => {
    const orderDate = new Date(order.createdAt);
    return !filters.filterByMonth || orderDate.getTime() >= month.getTime();
  };

  const filteredData = data
    ? data.filter((order) => {
      return (
        filterByDay(order, filters) &&
        filterByUsername(order, filters) &&
        filterByStatus(order, statusFilter) &&
        filterByWeek(order, filters, week) &&
        filterByMonth(order, filters, month)
      );
    })
    : [];

  const router = useRouter();
  const statusModalHandler = (orderId: string) => {
    setSelectedOrderId(orderId);
    setStatusModal(!statusModal);
  };

  return (
    <div className="bg-white w-full rounded-lg ml-5 h-auto py-2 ">
      <p className="text-[20px] font-[700] p-6 border-b border-slate-300 ">
        Захиалга
      </p>
      <table className="w-full">
        <thead>
          <tr className="flex bg-[#F7F7F8] py-4  justify-between px-[80px] border-b border-slate-300">
            <th className="w-[100px] text-sm text-[#3F4145]">Захиалгын ID дугаар</th>
            <th className="w-[200px] text-sm text-[#3F4145]">Үйлчлүүлэгч</th>
            <th className="w-[150px] text-sm text-[#3F4145]">Огноо</th>
            <th className="w-[150px] text-sm text-[#3F4145]">Цаг</th>
            <th className="w-[100px] text-sm text-[#3F4145]">Төлбөр</th>
            <th className="w-[150px] text-sm text-[#3F4145]">Статус</th>
            <th className="w-[100px] text-sm text-[#3F4145]">Дэлгэрэнгүй</th>
          </tr>
        </thead>
        <tbody>
          {filteredData &&  
            filteredData.map((e: any) => (
              <tr key={e._id} className="flex justify-between px-[80px] py-3">
                <td className="w-[100px] text-semibold text-sm">
                  #{e?.orderNumber}
                </td>
                <td className="w-[200px] flex flex-col">
                  <p className="text-black w-fit text-semibold text-sm">
                    {e?.userId?.username}
                  </p>
                  <p className="text-black w-fit">{e?.userId?.email}</p>
                </td>
                <td className="w-[150px]">
                  {formatDate(e.createdAt)}
                </td>
                <td className="w-[100px]">
                  {formatTime(e.createdAt)}
                </td>
                <td className="w-[100px]">
                  {e?.amountPaid}₮
                </td>
                <td
                  onClick={() => statusModalHandler(e?._id)}
                  className="w-[150px] cursor-pointer rounded-lg py-[2px] px-2"
                >
                  {e?.status}
                </td>
                <td className="w-[100px] cursor-pointer">
                  <div onClick={() => router.push(`/${e?._id}`)} className="cursor-pointer w-[100px]">
                    <ChevronRight />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
