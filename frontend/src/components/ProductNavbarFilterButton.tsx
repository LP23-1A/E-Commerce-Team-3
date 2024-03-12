import React, { ReactElement } from "react";
import ArrowDown from "@/assets/ArrowDown";

interface ProductNavbarFilterButtonProps {
  text: string;
  iconSvg: ReactElement;
}

const ProductNavbarFilterButton: React.FC<ProductNavbarFilterButtonProps> = ({ text, iconSvg }) => {
  return (
    <div className="bg-[#FFFFFF] border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2 h-fit w-fit flex items-center">
      {iconSvg}
      {text}
      <ArrowDown />
    </div>
  );
};

export default ProductNavbarFilterButton;
