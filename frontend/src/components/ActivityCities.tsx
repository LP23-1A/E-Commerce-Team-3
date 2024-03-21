import ChevronRight from "@/assets/ChevronRight";
import * as React from 'react';

const citiesData = [
  { name: "Улаанбаатар", percentage: 70 },
  { name: "Эрдэнэт", percentage: 20 },
  { name: "Дархан", percentage: 10 },
  { name: "Бусад", percentage: 0 }
];

const percent = ['70', '20', '10', '0']

const CityProgressBar = ({ name, percentage }) => (
  <div className="flex items-center justify-between p-6">
    <p className="w-[100px]">{name}</p>
    <div className="h-2 w-[353px] bg-slate-100 rounded-3xl">
      <div className="h-2 bg-black rounded-3xl " />
    </div>
    <p>{percentage}%</p>
  </div>
);

function ActivityCity() {
  return (
    <div className="bg-[#fff] rounded-xl">
      <div className="flex items-center justify-between p-6">
        <h1>Идэвхтэй бүс нутаг</h1>
        <ChevronRight />
      </div>
      {citiesData.map(city => (
        <CityProgressBar key={city.name} name={city.name} percentage={city.percentage} />
      ))}
    </div>
  );
}

export default ActivityCity;
