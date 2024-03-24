import React, { ReactElement, useState } from "react";
import DateTrackerIcon from "@/assets/DateTrackerIcon"

interface ProductFilterByMonthProps {
    onMonthChange: (month: string) => void; 
  }

const ProductFilterByMonth : React.FC<ProductFilterByMonthProps> = ({onMonthChange}) => {
const [month , setMonth] = useState("");

const data = ["1 сар" , "2 сар" , "3 сар" , "4 сар" , "5 сар", "6 сар" , "7 сар" , "8 сар" , "9 сар" , "10 сар" , "11 сар" , "12 сар"]

const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedMonth = e.target.value
  setMonth(selectedMonth)
  onMonthChange(selectedMonth)
  };

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2  w-fit flex items-center">
      <DateTrackerIcon/>
      <select  onChange={handleMonthChange} defaultValue="Сараар">
        <option   disabled>Сараар</option>
        {data && data.map((el:string , index:number) => <option key={index} value={el}>{el}</option>)}
      </select>
    </div>
  );
};

export default ProductFilterByMonth;
