import BasketIcon from "@/assets/BasketIcon"
import FavouriteIcon from "@/assets/FavouriteIcon"
import SearchIcon from "@/assets/SearchIcon"
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/navigation"
import { useBasket } from "./OrderContext";
import { useDraft } from "./DraftContext";

const ProductListByCategory = ({ selectedCategory }: any) => {
    const { addToCart } = useBasket();
    const {addToDraft} = useDraft()
    const router = useRouter()

    const fetcher = async (url: string) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    };
    const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

    const { data, error, isLoading } = useSWR(
        `${backendPoint}/product`,
        fetcher
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    const filteredProducts = selectedCategory
        ? data.filter((el: any) => el.mainCategory.mainCategoryName === selectedCategory)
        : data;
        

    const productDetailPageHandler = ( productId : string) => {
        router.push("/user/productDetail");
        localStorage.setItem("productId", productId)

    }

    return (
        <div>
            {filteredProducts.map((el: any) => {
                return (
                    <div key={el._id} className="flex p-4">
                        <button onClick={()=>productDetailPageHandler(el._id)} className="bg-[#EBF4F3] w-[270px] h-[270px] flex justify-center items-center p-4">
                            <img src={el.images[1]}></img>
                        </button>
                        <div className=" flex flex-col h-[270px] w-[608px] p-4 justify-between">
                            <div className="flex flex-col gap-4">
                                <p className="text-[#151875]">{el.productName}</p>
                                <div>
                                    <p className="text-[#151875]">{el.price}</p>
                                </div>
                                <p className="text-[#9295AA]">{el.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <div onClick={()=> addToCart(el)} className="h-[34px] w-[34px] rounded-2xl bg-[#fff] flex justify-center items-center"><BasketIcon /></div>
                                <div onClick={()=> addToDraft(el)}  className="h-[34px] w-[34px] rounded-2xl bg-[#fff] flex justify-center items-center"><FavouriteIcon /></div>
                                <div className="h-[34px] w-[34px] rounded-2xl bg-[#fff] flex justify-center items-center"><SearchIcon /></div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}

export default ProductListByCategory