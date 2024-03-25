import React, { ReactElement, useState } from "react";
import DateTrackerIcon from "@/assets/DateTrackerIcon"

interface ProductFilterByMonthProps {
    onMonthChange: (month: string) => void; 
  }

const ProductFilterByMonth : React.FC<ProductFilterByMonthProps> = ({onMonthChange}) => {
  const [selected , setSelected]   = useState(null);
  const [selectedMonth , setSelectedMonth] = useState(null)

const data = ["1 сар" , "2 сар" , "3 сар" , "4 сар" , "5 сар", "6 сар" , "7 сар" , "8 сар" , "9 сар" , "10 сар" , "11 сар" , "12 сар"]

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2  w-fit flex items-center">
      <DateTrackerIcon/>
      <select  onChange={(e:any) => setSelected(e.target.value)} defaultValue="Сараар">
        <option value=""  disabled>Сараар</option>
        {data && data.map((month:any , index) => <option key={index} value={month}>{month}</option>)}
      </select>
    </div>
  );
};

export default ProductFilterByMonth;
