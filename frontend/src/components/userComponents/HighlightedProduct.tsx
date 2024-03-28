import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useBasket } from "./OrderContext";
import {useRouter} from "next/navigation"


const HighlightedProduct = ({ data }: any) => {
  const { addToCart } = useBasket();
  const router = useRouter()

  const productDetailPageHandler = ( productId : string) => {
    router.push("/user/productDetail");
    localStorage.setItem("productId", productId)
    console.log(productId);

}

  return (
    <div className=" flex flex-col items-center mt-[200px]">
      <p className="text-[#151875] text-[42px] font-bold">
        Онцлох бүтээгдэхүүн
      </p>
      <div className="flex justify-center gap-6 flex-wrap w-[1200px]">
        {data &&
          data.map((e) => {
            return (
              <div  key={e.id} className="relative group">
                <div className="w-[270px]  h-[280px] flex-col px-10 relative flex justify-center items-center rounded-md bg-white shadow-xl">
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => addToCart(e)}><ShoppingCartOutlinedIcon /></button>
                  </div>
                  <img onClick={()=>productDetailPageHandler(e._id)}
                    className="min-w-[201px]  min-h-[201px]"
                    src={e.images[1]}
                    alt=""
                  />
                  <div className="flex flex-col items-center w-[270px] py-2  h-[160px] gap-5 group hover:text-white group-hover:bg-[#2F1AC4]">
                    <p className="text-[18px] font-bold text-[#FB2E86] group-hover:text-white ">
                      {e.productName}
                    </p>
                    <p className="text-[18px] font-normal  text-[#2F1AC4] group-hover:text-white ">
                      {e.price}₮
                    </p>
                  </div>
                </div>
              </div>

            );
          })}
      </div>
    </div>
  );
};

export default HighlightedProduct;
