import BasketIcon from "@/assets/BasketIcon"
import FavouriteIcon from "@/assets/FavouriteIcon"
import SearchIcon from "@/assets/SearchIcon"
import image from "../../assets/Image.png"
import axios from "axios";
import useSWR from "swr";

const ProductListByCategory = () => {

    const fetcher = async (url: string) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    };
    
    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/product",
        fetcher
    );
    if (isLoading) {
        return <div>Loading...</div>;
      }

    return (
       <div>
         {data.map((el:any) => {
            return(
                <div className="flex p-4">
            <div className="bg-[#EBF4F3] w-[270px] h-[270px] flex justify-center items-center p-4">
                <img src={el.images[1]}></img>
            </div>
            <div className=" flex flex-col h-[270px] w-[608px] p-4 justify-between">
                <div className="flex flex-col gap-4">
                    <p className="text-[#151875]">{el.productName}</p>
                    <div>
                        <p className="text-[#151875]">{el.price}</p>
                    </div>
                    <p className="text-[#9295AA]">{el.description}</p>
                </div>
                <div className="flex gap-2">
                    <div className="h-[34px] w-[34px] rounded-2xl bg-[#fff] flex justify-center items-center"><BasketIcon /></div>
                    <div className="h-[34px] w-[34px] rounded-2xl bg-[#fff] flex justify-center items-center"><FavouriteIcon /></div>
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