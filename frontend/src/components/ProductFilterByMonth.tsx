import React, { useState } from "react";
import DateTrackerIcon from "@/assets/DateTrackerIcon";

interface ProductFilterByMonthProps {
  onMonthChange: (month: string | null) => void;
}

const ProductFilterByMonth: React.FC<ProductFilterByMonthProps> = ({ onMonthChange }) => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const data = ["1 сар", "2 сар", "3 сар", "4 сар", "5 сар", "6 сар", "7 сар", "8 сар", "9 сар", "10 сар", "11 сар", "12 сар"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value;
    setSelectedMonth(month);
    onMonthChange(month === "" ? null : month);
  };

  return (
    <div className="bg-white border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2 w-fit flex items-center">
      <DateTrackerIcon />
      <select
        value={selectedMonth || ""}
        onChange={handleChange}
        className="outline-none"
      >
        <option value="" disabled>
          Сараар
        </option>
        {data.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilterByMonth;
