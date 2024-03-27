import FavouriteIcon from "@/assets/FavouriteIcon"

const ProductDetail = ({image1,image2,image3, productName, price, description }: any) => {
    return (
        <div className="px-[350px] py-10">
            <div className="flex h-[487px] w-[1199px] p-4 ">
                <div className="flex justify-center items-center border">
                    <div className="flex flex-col justify-between p-10">
                        <div className="flex justify-center items-center h-[200px] w-[100px] border"><img src={image1}></img></div>
                        <div className="flex justify-center items-center h-[200px] w-[100px] border"><img src={image2}></img></div>
                    </div>
                    <div className="flex justify-center items-center h-[487px] w-[375px]"><img src={image3}></img></div>
                </div>
                <div className=" flex flex-col h-[270px] w-[608px] px-4 py-14 gap-[64px]">
                    <div className="flex flex-col gap-4">
                        <p className="text-[#111C85] font-bold text-[36px]">{productName}</p>
                        <div>
                            <p className="text-[#151875] text-[32px]">{price}</p>
                        </div>
                        <p className="text-[#9295AA]">{description}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button className="bg-[#FB2E86] font-bold text-[16px] w-fit h-fit rounded-[4px] px-[25px] py-[12px] text-[#FFFFFF] ">Continue Shipping</button>
                        <div className=" h-[34px] w-[34px] rounded-2xl bg-[#fff] flex justify-center items-center"><FavouriteIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail