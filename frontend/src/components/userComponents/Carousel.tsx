'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Drop from "@/assets/Drop";

const Carousel = ({ data }:any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  const productDetailPageHandler = (productId:string) => {
    router.push("/user/productDetail");
    localStorage.setItem("productId", productId);
  };

  return (
    <div className="relative flex justify-center bg-[#F2F0FF] py-10 overflow-hidden">
      <div className="flex transition-transform duration-500">
        {data.map((e:any, index:number) => (
          <div
            key={index}
            className={`slide ${
              index === currentSlide ? "active" : "hidden"
            }`}
          >
            <div className="flex items-center gap-[100px]">
              <div className="flex flex-col gap-5">
                <p className="font-[700] text-[16px] text-[#FB2E86]">
                  Тав тухтай орчинг таны амьдралд
                </p>
                <p className="font-[800] text-[53px] ">
                  2024 оны хамгийн шинэ загвар
                </p>
                <p className="font-[700] text-[16px] w-[350px] text-[#8A8FB9]">
                  {e?.description}
                </p>
                <button
                  onClick={() => productDetailPageHandler(e._id)}
                  className="bg-[#FB2E86] w-[150px] text-white p-3"
                >
                  Дэлгэрэнгүй
                </button>
              </div>
              <div className="relative">
                {e.salePercent && <Drop discount={e.salePercent} />}
                <img
                  className="w-[629px] h-[629px]"
                  src={e.images[1]}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors duration-300"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors duration-300"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
