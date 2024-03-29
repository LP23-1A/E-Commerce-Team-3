"use client";
import useSWR from "swr";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import formatDate from "@/components/utils/FormatDate";
import OrderDayFilterInc from "@/components/OrderDayFilterInc";
import { useInputOrderFilter } from "@/components/OrderFilterProvider";

const Income = () => {
  const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(`${backendPoint}/order`, fetcher);

  const { filters } = useInputOrderFilter();

  const getTotalPrice = () => {
    let totalPrice = 0;
    if (data && data.length > 0) {
      data.forEach((order: any) => {
        const amount = order?.amountToPaid;
        if (!isNaN(amount)) {
          totalPrice += amount;
        }
      });
    }
    return totalPrice;
  };

  const week = new Date();
  week.setDate(week.getDate() - 7);

  const month = new Date();
  month.setDate(month.getDate() - 30);

  const filterByWeek = (order: any, filters: any, week: Date) => {
    const orderDate = new Date(order.createdAt);
    return !filters.filterByWeek || orderDate.getTime() >= week.getTime();
  };

  const filterByMonth = (order: any, filters: any, month: Date) => {
    const orderDate = new Date(order.createdAt);
    return !filters.filterByMonth || orderDate.getTime() >= month.getTime();
  };

  const filterByDay = (order: any, filters: any) => {
    return (
      !filters.filterByDay ||
      formatDate(order.createdAt) === formatDate(new Date())
    );
  };

  const filteredData = data
    ? data.filter((order: any) => {
        return (
          filterByDay(order, filters) &&
          filterByWeek(order, filters, week) &&
          filterByMonth(order, filters, month)
        );
      })
    : [];

  return (
    <div className="w-screen h-screen bg-gray-200 justify-center items-center">
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className="flex flex-col items-center mt-5 ml-40 py-10">
          <div className="bg-white w-[1200px] h-[160px] rounded-xl">
            <div className="flex justify-between p-6 border-b-[1px] items-center">
              <h2 className="text-xl font-semibold text-[#121316]">Орлого</h2>
              <button className="w-[144px] h-[36px] rounded-lg bg-[#E4E7EB]">
                Хуулга татах``
              </button>
            </div>
            <div className="flex justify-between p-6 items-center w-[724px]">
              <h2 className="text-3xl font-semibold text-[#121316]">
                {getTotalPrice()}₮
              </h2>
              <OrderDayFilterInc />
            </div>
          </div>
          <div className="flex flex-col items-center mt-5 ">
            <div className="bg-white   h-auto rounded-xl py-4 w-[1200px]">
              <div className="flex py-3 justify-between px-6 border-b-[1px] items-center">
                <p className="text-xs font-normal text-[#3F4145] w-[169px]">
                  Захиалгын ID дугаар
                </p>
                <p className="text-xs font-normal text-[#3F4145] w-[268px] px-6">
                  Захиалагч
                </p>
                <p className="text-xs font-normal text-[#3F4145] w-[137px] px-6">
                  Төлбөр
                </p>
                <p className="text-xs font-normal text-[#3F4145] w-[150px] px-6">
                  Огноо
                </p>
              </div>
              <div>
                {filteredData &&
                  filteredData.map((order: any, index: number) => (
                    <div className="flex justify-between py-2" key={index}>
                      <p className="text-xs font-normal text-[#3F4145] w-[150px] px-6">
                        #{order.orderNumber}
                      </p>
                      <div>
                        <p className="text-xs font-normal text-[#3F4145] w-[200px] px-6">
                          {order.userId.email}
                        </p>
                        <p className="text-xs font-normal text-[#3F4145] w-[200px] px-6">
                          {order.userId.phoneNumber}
                        </p>
                      </div>
                      <p className="text-xs font-normal text-[#3F4145] w-[110px] px-8">
                        {order.amountToPaid}₮
                      </p>
                      <p className="text-xs font-normal text-[#3F4145] w-[170px] px-6">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
