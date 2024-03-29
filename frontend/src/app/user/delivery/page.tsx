"use client";
import { UserFooter } from "@/components/userComponents/Footer";
import UserNavbar from "@/components/userComponents/Navbar";
import OrderButton from "@/components/userComponents/OrderButton";
import { useBasket } from "@/components/userComponents/OrderContext";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Topbar from "@/components/userComponents/Topbar";

const Order = () => {
  const { basket, setBasket } = useBasket();
  const [user, setUser] = useState("");
  const [error, setUserError] = useState<boolean | string>(false);
  const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

  const input = useRef({
    phoneNumber: "",
    lastName: "",
    firstName: "",
    address: "",
    apartment: "",
    city: "",
    zipCode: Number,
    description: "",
  });
  const handleBack = (field: string, value: string | number) => {
    input.current = { ...input.current, [field]: value };
  };
  const productsId = basket.map((item: any) => item._id);
  const productsCount = basket.map((item) => item.count);
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.token;
    const code: any = jwt.decode(token);
    if (code) {
      setUser(code?.payload.id);
    }
  }, []);

  useEffect(() => {
    const cookies = parseCookies();
    const basketFromCookie = cookies.order;
    if (basketFromCookie) {
      setBasket(JSON.parse(basketFromCookie));
    }
  }, []);

  const totalPrices = basket.reduce(
    (acc, curr: any) => acc + curr.price * curr.count,
    0
  );

  const totalPrice = totalPrices;
  const handlePost = async () => {
    if (!user) {
      setUserError("захиалга хийхээсээ өмнө нэвтэрнэ үү");
      return;
    }
    if (
      !input.current.phoneNumber ||
      !input.current.lastName ||
      !input.current.firstName ||
      !input.current.address ||
      !input.current.city ||
      !input.current.zipCode ||
      !input.current.description
    ) {
      setUserError("Бөглөөгүй хэсгийг бөглөнө үү");
      return;
    }
    try {
      const res = await axios.post(`${backendPoint}/order`, {
        products: productsId,
        userId: user,
        quantity: productsCount,
        phoneNumber: input.current.phoneNumber,
        Name: input.current.phoneNumber,
        address: input.current.address,
        city: input.current.city,
        zipCode: input.current.zipCode,
        description: input.current.description,
        apartment: input.current.apartment,
        amountToPaid:totalPrices,
        createdAt: Date(),
      });
      router.push("/user/success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <UserNavbar />
      <Topbar />
      <div className="flex justify-center gap-5 mt-7 mb-7">
        <div >
          <p className="text-[#151875] font-bold text-[18px]">Hekto Demo</p>
          <p className="text-[#151875] text-[18px]">
            Cart/ Information/ Shipping/ Payment
          </p>

          <div className="flex gap-4">
            <div className="bg-[#F4F4FC] w-[792px] h-[920px] py-[50px] px-[50px]">
              <div>
                <div className="flex flex-col justify-around h-[200px]">
                  <p className="text-[#151875] font-bold text-[18px]">
                    Contact Information
                  </p>
                  <input
                    onChange={(e) => handleBack("phoneNumber", e.target.value)}
                    className="bg-[#F4F4FC] border-b-2 border-[#BFC5E0]"
                    type="text"
                    placeholder="Email or mobile phone number"
                  />
                  <p className=" text-[12px] text-[#8A91AB]">
                    Keep me up to date on news and excluive offers
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]  mt-[100px]">
                  <p className="text-[#151875] font-bold text-[18px]">
                    Shipping address
                  </p>
                  <div className="flex justify-between ">
                    <input
                      onChange={(e) => handleBack("firstName", e.target.value)}
                      className="bg-[#F4F4FC] border-b-2 border-[#BFC5E0] w-[336px]"
                      type="text"
                      placeholder="First name (optional)"
                    />
                    <input
                      onChange={(e) => handleBack("lastName", e.target.value)}
                      className="bg-[#F4F4FC] w-[336px] border-b-2 border-[#BFC5E0]"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <input
                      onChange={(e) => handleBack("address", e.target.value)}
                      className="bg-[#F4F4FC] border-b-2 border-[#BFC5E0]"
                      type="text"
                      placeholder="Address"
                    />
                    <input
                      onChange={(e) => handleBack("apartment", e.target.value)}
                      className="bg-[#F4F4FC] border-b-2 border-[#BFC5E0]"
                      type="text"
                      placeholder="Appaetnentment,suit,e.t.c (optinal)"
                    />
                    <input
                      onChange={(e) => handleBack("city", e.target.value)}
                      className="bg-[#F4F4FC] border-b-2 border-[#BFC5E0]"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex justify-between">
                    <input
                      onChange={(e) =>
                        handleBack("description", e.target.value)
                      }
                      className="bg-[#F4F4FC] border-b-2 border-[#BFC5E0] w-[336px]"
                      type="text"
                      placeholder="description"
                    />
                    <input
                      onChange={(e) => handleBack("zipCode", e.target.value)}
                      className="bg-[#F4F4FC] border-b-2 border-[#BFC5E0] w-[336px]"
                      type="number"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {basket &&
                basket.map((e:any) => {
                  return (
                    <div
                      className="flex justify-between mt-[20px] p-4 border-b-2 w-[380px] gap-6 "
                      key={e.productId}
                    >
                      <div className="flex gap-4 ">
                        <div className="w-[81px] h-[81px] relative">
                          <img
                            className="min-w-[83px] min-h-[87px]"
                            src={e?.images[1]}
                            alt=""
                          />
                        </div>
                        <p className=" font-extrabold text-[18px] text-[#000000]">
                          {e?.productName}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[#151875] text-[18px] font-bold">
                          {e?.price}₮
                        </p>
                      </div>
                    </div>
                  );
                })}
              <OrderButton
                totalPrices={totalPrices}
                totalPrice={totalPrice}
                onClick={handlePost}
              />
              {error && (
                <p className="text-[#FF1788] font-semibold text-center">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
};

export default Order;
