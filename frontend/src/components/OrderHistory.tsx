import axios from "axios";
import { useState, useMemo } from "react";
import StatusBar from "./StatusBar";
import ChevronRight from "@/assets/ChevronRight";
import { useRouter } from "next/navigation";
import { useOrderFilter } from "./OrderByStatusProvider";
import { useInputOrderFilter } from "./OrderFilterProvider";
import formatTime from "./utils/FormatTime";
import formatDate from "./utils/FormatDate";
import statusCellStyle from "./utils/StatusColor";

const OrderHistory = ({ data }: any) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [statusModal, setStatusModal] = useState(false);
  const { filters } = useInputOrderFilter();
  const { statusFilter } = useOrderFilter();

  const week = useMemo(() => {
    const week = new Date();
    week.setDate(week.getDate() - 7);
    return week;
  }, []);

  const month = useMemo(() => {
    const month = new Date();
    month.setDate(month.getDate() - 30);
    return month;
  }, []);

  const filterByDay = useMemo(() => (order, filters) => {
    return !filters.filterByDay || formatDate(order.createdAt) === formatDate(new Date());
  }, []);

  const filterByUsername = useMemo(() => (order, filters) => {
    return !filters.filterByUsername || order.userId.email.toLowerCase().includes(filters.filterByUsername.toLowerCase());
  }, []);

  const filterByStatus = useMemo(() => (order, statusFilter) => {
    return !statusFilter || order.status === statusFilter;
  }, []);

  const filterByWeek = useMemo(() => (order, filters, week) => {
    const orderDate = new Date(order.createdAt);
    return !filters.filterByWeek || orderDate.getTime() >= week.getTime();
  }, []);

  const filterByMonth = useMemo(() => (order, filters, month) => {
    const orderDate = new Date(order.createdAt);
    return !filters.filterByMonth || orderDate.getTime() >= month.getTime();
  }, []);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((order) => (
      filterByDay(order, filters) &&
      filterByUsername(order, filters) &&
      filterByStatus(order, statusFilter) &&
      filterByWeek(order, filters, week) &&
      filterByMonth(order, filters, month)
    ));
  }, [data, filters, statusFilter, week, month]);

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
  {filteredData && filteredData.length > 0 ? (
    filteredData.map((e: any) => (
      <div>
    {statusModal && selectedOrderId === e?._id && <StatusBar selectedOrderId={selectedOrderId} onClick={statusModalHandler}/>}
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
      <td className="w-[5 0px]">
        {e?.amountPaid}₮
      </td>
      <td style={statusCellStyle(e?.status)}
        onClick={() => statusModalHandler(e?._id)}
        className="w-[150px]  cursor-pointer rounded-2xl flex justify-center items-center py-[2px] px-4"
      >
        {e?.status}
      </td>
      <td className="w-[100px] cursor-pointer">
        <div onClick={() => router.push(`/${e?._id}`)} className="cursor-pointer w-[100px]">
          <ChevronRight />
        </div>
      </td>
      
    </tr>
      </div>
     
    ))
  ) : (
    <tr>
      <td colSpan={7} className="text-center p-10 font-bold">No orders matching the selected filters</td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  );
};

export default OrderHistory;