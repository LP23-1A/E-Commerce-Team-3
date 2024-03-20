import ChevronRight from "@/assets/ChevronRight";
import { useState } from "react";

interface Product {
  _id: string;
  productName: string;
  productId: string;
  amountPaid: number;
}

interface Props {
  data: Product[];
}

const BestSellers = ({ data }: Props) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [statusModal, setStatusModal] = useState(false);

  const toggleStatusModal = (orderId: string) => {
    setSelectedOrderId(orderId);
    setStatusModal(prevState => !prevState);
  };

  return (
    <div className="w-[581px] bg-white rounded-xl mt-10 pb-6">
      <div className="flex justify-between items-center py-5 pl-5 mr-3 mb-3">
        <h1 className="font-semibold leading-6 text-lg">Best Sellers</h1>
        <ChevronRight />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-around bg-[#ECEDF0] mx-4 py-4 border-b border-slate-300">
          <p className="text-[#3F4145] text-xs font-normal">№</p>
          <p className="text-[#3F4145] text-xs font-normal">Product</p>
          <p className="text-[#3F4145] text-xs font-normal">Ordered</p>
          <p className="text-[#3F4145] text-xs font-normal">Price</p>
        </div>
        {data &&
          data.map((product: Product) => (
            <div key={product._id} className="flex justify-around border-b border-slate-300 py-3">
              <p className="text-sm">1</p>
              <div className="flex flex-col">
                <p className="text-black w-fit text-semibold text-sm">{product.productName}</p>
                <p className="text-black w-fit">#{product.productId}</p>
              </div>
              <p className="text-sm">200</p>
              <p className="text-sm">{product.amountPaid}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSellers;
