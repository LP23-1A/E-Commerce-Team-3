import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import ChevronRight from "@/assets/ChevronRight";

const data = [
  {
    name: "01/06",
    pv: 2400,
    amt: 2400
  },
  {
    name: "01/07",
    pv: 1398,
    amt: 2210
  },
  {
    name: "01/08",
    pv: 9800,
    amt: 2290
  },
  {
    name: "01/09",
    pv: 3908,
    amt: 2000
  },
  {
    name: "01/10",
    pv: 4800,
    amt: 2181
  },
  {
    name: "01/11",
    pv: 3800,
    amt: 2500
  }
];

export default function App() {
  return (
   <div className="bg-white w-[565px] mt-10 rounded-xl">
   <div className="flex justify-between items-center py-5 pl-5 mr-3 mb-3">
        <h1 className="font-semibold leading-6 text-lg">Борлуулалт</h1>
        <ChevronRight />
      </div>
     <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="10 10" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#00000" />
    </BarChart>
   </div>
  );
}
