"use client";
import Check from "@/assets/Check";
import Clock from "@/assets/Clock";
import List from "@/assets/List";
import { UserFooter } from "@/components/userComponents/Footer";
import UserNavbar from "@/components/userComponents/Navbar";
import { useBasket } from "@/components/userComponents/OrderContext";
import Topbar from "@/components/userComponents/Topbar";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";

const SuccesfulOrder = () => {
  const { basket, setBasket } = useBasket();

  const clearCart = () => {
    destroyCookie(null, "order");
    setBasket([]);
  };
  const router = useRouter();
  return (
    <div className=" h-full">
      <UserNavbar />
      <Topbar/>
      <div className="flex justify-center   h-[700px] mt-[100px] mb-[100px]">
        <Clock />
        <div className=" flex items-center w-[1000px]  flex-col justify-center gap-6">
          <Check />
          <p className="text-[#151875] text-[43px] font-bold">
            Таны захиалга амжилттай
          </p>
          <p className="w-[700px] text-center text-[#8A91AB]">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button
            onClick={() => {
              router.push("/");
              clearCart;
            }}
            className=" bg-[#FF1788] w-[206px] h-[59px] rounded-md p-3 text-white"
          >
            Үргэлжлүүлэх
          </button>
        </div>
        <div className=" flex justify-end items-end">
          <List />
        </div>
      </div>
      <UserFooter />
    </div>
  );
};

export default SuccesfulOrder;
