"use client";
import Drop from "@/assets/Drop";
import { useEffect, useState } from "react";

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
  return (
    <div className="relative flex justify-center  bg-[#F2F0FF] py-10 ">
      <div className="flex overflow-hidden ">
        {data &&
          data.map((e, index) => (
            <div
              key={index}
              className={
                index === currentSlide ? "slide block" : "slide hidden"
              }
            >
              <div className="flex items-center  gap-[100px]">
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
                  <button className="bg-[#FB2E86] w-[150px] text-[white] p-3">
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
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
