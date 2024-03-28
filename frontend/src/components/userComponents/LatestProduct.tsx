import { useMemo } from "react";
import formatDate from "../utils/FormatDate";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useBasket } from "./OrderContext";

const LatestProduct = ({ data }: any) => {
  const { addToCart } = useBasket();

  const latest = useMemo(() => {
    const latest = new Date();
    latest.setDate(latest.getDate() - 5);
    return latest;
  }, []);

  const filteredData = data.filter((e) => {
    const createdDate = new Date(formatDate(e.createdAt));
    return createdDate >= latest;
  });

  return (
    <div className="flex items-center flex-col mt-[200px]">
      <p className="text-[#151875] text-[42px] font-bold">Шинээр нэмэгдсэн</p>
      <div className="flex gap-6 justify-center flex-wrap w-[1200px] ">
        {filteredData.map((e) => (
          <div key={e.id} className="relative group">
            <div className="w-[270px]  h-[280px] px-10 relative flex justify-center items-center rounded-md bg-[#F6F7FB] ">
              <div className="bg-white p-1  absolute left-3 bottom-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={()=> addToCart(e)}>
                  <ShoppingCartOutlinedIcon />
                </button>
              </div>
              <img className="w-[201px] h-[201px]" src={e.images[1]} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[18px] font-bold text-[#151875]">
                {e.productName}
              </p>
              <div className="flex gap-1">
                <p className="w-[10px] h-[10px] rounded-3xl bg-[#DE9034]"></p>
                <p className="w-[10px] h-[10px] rounded-3xl bg-[#EC42A2]"></p>
                <p className="w-[10px] h-[10px] rounded-3xl bg-[#8568FF]"></p>
              </div>
              <p className="text-[18px] font-normal text-[#151875]">
                {e.price.toLocaleString()}₮
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
