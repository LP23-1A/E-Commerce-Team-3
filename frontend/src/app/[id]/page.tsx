"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChevronLeft from "@/assets/ChevronLeft";
import ChevronDown from "@/assets/ChevronDown";
import image from "../../assets/Image.png";
import Car from "@/assets/Car";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import useSWR from "swr";
import PayDetail from "@/components/PayDetail";
import DeliveryDetail from "@/components/DeliveryDetail";

const OrderDetail = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const pathname = usePathname();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/order${pathname}`,
    fetcher
  );
  const handleBack = () => {
    router.push(`order`);
  };
  const getOneTotalPrice = (qty, price) => {
    return qty * price;
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    data?.products?.forEach((product) => {
      totalPrice += product?.price * data?.quantity;
    });
    return totalPrice;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="w-screen h-screen bg-gray-200 justify-center items-center">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <div
            className="flex bg-white h-[56px] pl-5 items-center gap-5 cursor-pointer "
            onClick={handleBack}
          >
            <ChevronLeft />
            <p className="">Захиалгын дэлгэрэнгүй</p>
          </div>
          <div className="flex gap-10 ">
            <div className="bg-white mt-10 w-[627px] h-[800px] rounded-xl py-6 px-5 ml-5 border border-slate-300">
              <div className="flex items-center justify-between ">
                <div className="flex flex-col">
                  <p className="font-extralight">Захиалгын ID дугаар:</p>
                  <p className="text-xl font-semibold">#{data?.orderNumber}</p>
                </div>
                <div className="flex gap-2 items-center bg-[#ECEDF0] py-2 px-3 rounded-full ">
                  <button>{data?.status}</button>
                  <ChevronDown />
                </div>
              </div>
              <div className="flex flex-col pt-14">
                <p className="font-extralight">Захиалагч: Хувь хүн</p>
                <div className="flex items-center">
                  <p className="text-base font-semibold">
                    {data?.userId?.username}-
                  </p>
                  <p className="text-sm font-light">
                    {" "}
                    {data?.userId?.email}, {data?.userId?.phoneNumber}
                  </p>
                </div>
              </div>
              {data &&
                data?.products.map((product) => (
                  <div className="flex bg-[#ECEDF0] rounded-lg mt-8">
                    <img
                      src={product?.images}
                      alt=""
                      className="rounded-s-lg w-[180px] h-[154px] p-2"
                    />
                    <div className="w-full p-4">
                      <h5 className="text-2xl font-bold">
                        {" "}
                        {product?.productName}
                      </h5>
                      <p className="font-light mt-2 text-sm">
                        {formatDate(product?.createdAt)}
                      </p>
                      <p className="font-light text-sm">
                        Бүтээгдэхүүний ID: {product?._id}
                      </p>
                      <div className="flex justify-between items-center mt-6">
                        <p className="font-extralight">
                          Тоо ширхэг:{data?.quantity} *{" "}
                          {product?.price.toLocaleString()}₮
                        </p>
                        <p className="text-base font-semibold">
                          {getOneTotalPrice(
                            data?.quantity,
                            product?.price
                          ).toLocaleString()}
                          ₮
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex flex-col mt-10">
              <DeliveryDetail data={data} />
              <PayDetail data={data} totalPrice={getTotalPrice()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
