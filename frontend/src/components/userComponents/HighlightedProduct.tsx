import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const HighlightedProduct = ({ data }: any) => {
  return (
    <div className=" flex flex-col items-center mt-[200px]">
      <p className="text-[#151875] text-[42px] font-bold">
        Онцлох бүтээгдэхүүн
      </p>
      <div className="flex justify-center gap-4">
        {data &&
          data.map((e) => {
            return (
              <div key={e.id}>
                <div className="w-[270px]  h-[280px] flex-col px-10 relative flex justify-center items-center rounded-md bg-white shadow-xl ">
                  <img
                    className="w-[201px] h-[201px]"
                    src={e.images[1]}
                    alt=""
                  />
                  <div className="flex flex-col items-center">
                    <p className="text-[18px] font-bold text-[#FB2E86]">
                      {e.productName}
                    </p>
                    <p className="text-[18px] font-normal text-[#151875]">
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
