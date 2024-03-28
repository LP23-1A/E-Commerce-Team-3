"use client";
import { UserFooter } from "@/components/userComponents/Footer";
import UserNavbar from "@/components/userComponents/Navbar";
import { useBasket } from "@/components/userComponents/OrderContext";
import {useRouter} from 'next/navigation'
import { useEffect } from "react";
import { parseCookies, destroyCookie, setCookie } from "nookies";
import OrderButton from "@/components/userComponents/OrderButton";
import Topbar from "@/components/userComponents/Topbar";

const Basket = () => {
  const { basket, setBasket } = useBasket();
  const router = useRouter()

  useEffect(() => {
    const cookies = parseCookies();
    const basketFromCookie = cookies.basket;
    if (basketFromCookie) {
      setBasket(JSON.parse(basketFromCookie));
    }
  }, []);

  const incrementQuantity = (index) => {
    const updatedBasket = basket.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setBasket(updatedBasket);
    setCookie(null, "basket", JSON.stringify(updatedBasket));
  };

  const decrementQuantity = (index) => {
    const updatedBasket = basket.map((item, i) => {
      if (i === index && item.count > 1) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });
    setBasket(updatedBasket);
    setCookie(null, "basket", JSON.stringify(updatedBasket));
  };

  const clearCartItem = (index) => {
    const updatedBasket = basket.filter((_, i) => i !== index);
    setBasket(updatedBasket);
    setCookie(null, "basket", JSON.stringify(updatedBasket));
  };

  const totalPrices = basket.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );
  const totalPrice = totalPrices;

  const clearCart = () => {
    destroyCookie(null, "basket");
    setBasket([]);
  };

   const handlePush = ()=>{
    setCookie(null,'order', JSON.stringify(basket),{
      maxAge: 20 * 30,
    })
    router.push('/user/delivery')
   }
   
  return (
    <div>
      <UserNavbar />
      <Topbar/>
      <div className="mx-auto flex flex-col items-center">
        <div className="flex w-[1240px] justify-between  font-bold  mt-[35px]  py-3">
          <div className="flex flex-col">
            <div className="flex justify-between w-[800px] ">
              <p className="text-[#151875] w-[200px]">Бүтээгдэхүүн</p>
              <p className="text-[#151875] w-[37px] ">Үнэ</p>
              <p className="text-[#151875] w-[100px]">Тоо ширхэг</p>
              <p className="text-[#151875] w-[70px]">Нийт</p>
            </div>
            <div>
              {basket &&
                basket.map((e, index) => (
                  <div
                    className="flex justify-between mt-[20px] p-4 border-b "
                    key={e.productId}
                  >
                    <div className="flex gap-4 ">
                      <div className="w-[81px] h-[81px] relative">
                        <img
                          className="min-w-[83px] min-h-[87px]"
                          src={e?.images[1]}
                          alt=""
                        />
                        <button
                          onClick={() => clearCartItem(index)}
                          className="absolute top-0 bg-black text-white rounded-[50%] h-5 w-5 flex items-center justify-center left-[60px]"
                        >
                          x
                        </button>
                      </div>

                      <p className=" font-extrabold text-[18px] text-[#000000]">
                        {e?.productName}
                      </p>
                    </div>
                    <p className="text-[#151875] text-[18px] font-bold">
                      {e?.price}₮
                    </p>
                    <div className="flex flex-col items-center">
                      <p>{e.count}</p>
                      <div className="flex gap-8">
                        <button onClick={() => decrementQuantity(index)}>
                          -
                        </button>
                        <button onClick={() => incrementQuantity(index)}>
                          +
                        </button>
                      </div>
                    </div>

                    <p className="text-[#151875] text-[18px] font-bold">
                      {e.count * e.price}₮
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex justify-end mt-3 ">
              <button
                onClick={clearCart}
                className="  bg-[#FB2E86] py-2 px-3 w-[173px] text-white"
              >
                Карт цэвэрлэх
              </button>
            </div>
          </div>
    <OrderButton totalPrices={totalPrices} totalPrice={totalPrice} onClick={handlePush} />
        </div>
      </div>
      <div className="mt-[500px]">

      <UserFooter />
      </div>
    </div>
  );
};

export default Basket;
