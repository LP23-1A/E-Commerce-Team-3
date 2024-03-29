import { useState, useMemo } from "react";
import StatusBar from "./StatusBar";
import ChevronRight from "@/assets/ChevronRight";
import { useRouter } from "next/navigation";
import { useOrderFilter } from "./OrderByStatusProvider";
import { useInputOrderFilter } from "./OrderFilterProvider";
import formatTime from "./utils/FormatTime";
import formatDate from "./utils/FormatDate";
import statusCellStyle from "./utils/StatusColor";

interface Order {
  _id: string;
  orderNumber: number;
  userId: {
    username: string;
    email: string;
  };
  createdAt: Date;
  amountPaid: number;
  staus: any;
}

interface OrderHistoryProps {
  data: Order[];
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ data }) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [statusModal, setStatusModal] = useState<boolean>(false);
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

  const filterByDay = useMemo(
    () => (order: Order, filters: any) => {
      return (
        !filters.filterByDay ||
        formatDate(order.createdAt) === formatDate(new Date())
      );
    },
    []
  );

  const filterByUsername = useMemo(
    () => (order: Order, filters: any) => {
      return (
        !filters.filterByUsername ||
        order.userId.email
          .toLowerCase()
          .includes(filters.filterByUsername.toLowerCase())
      );
    },
    []
  );

  const filterByStatus = useMemo(
    () => (order: any, statusFilter: any) => {
      return !statusFilter || order.status === statusFilter;
    },
    []
  );

  const filterByWeek = useMemo(
    () => (order: any, filters: any, week: Date) => {
      const orderDate = new Date(order.createdAt);
      return !filters.filterByWeek || orderDate.getTime() >= week.getTime();
    },
    []
  );

  const filterByMonth = useMemo(
    () => (order: Order, filters: any, month: Date) => {
      const orderDate = new Date(order.createdAt);
      return !filters.filterByMonth || orderDate.getTime() >= month.getTime();
    },
    []
  );

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter(
      (order) =>
        filterByDay(order, filters) &&
        filterByUsername(order, filters) &&
        filterByStatus(order, statusFilter) &&
        filterByWeek(order, filters, week) &&
        filterByMonth(order, filters, month)
    );
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
            <th className="w-[100px] text-sm text-[#3F4145]">
              Захиалгын ID дугаар
            </th>
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
            filteredData.map((order:any) => (
              <tr
                key={order._id}
                className="flex justify-between px-[80px] py-3"
              >
                <td className="w-[100px] text-semibold text-sm">
                  #{order.orderNumber}
                </td>
                <td className="w-[200px] flex flex-col">
                  <p className="text-black w-fit text-semibold text-sm">
                    {order.userId.username}
                  </p>
                  <p className="text-black w-fit">{order.userId.email}</p>
                </td>
                <td className="w-[150px]">{formatDate(order.createdAt)}</td>
                <td className="w-[100px]">{formatTime(order.createdAt)}</td>
                <td className="w-[50px]">{order.amountPaid}₮</td>
                <td
                  style={statusCellStyle(order.status)}
                  onClick={() => statusModalHandler(order._id)}
                  className="w-[150px]  cursor-pointer rounded-2xl flex justify-center items-center py-[2px] px-4"
                >
                  {order.status}
                </td>
                <td className="w-[100px] cursor-pointer">
                  <div
                    onClick={() => router.push(`/${order._id}`)}
                    className="cursor-pointer w-[100px]"
                  >
                    <ChevronRight />
                  </div>
                </td>
              </tr>
        
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center p-10 font-bold">
                No orders matching the selected filters
              </td>
            </tr>
          )}
                {statusModal&&(<StatusBar onClick={statusModalHandler} selectedOrderId={selectedOrderId} />)}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
