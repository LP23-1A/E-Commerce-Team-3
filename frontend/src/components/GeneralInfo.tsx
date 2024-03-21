export default function GeneralInfoIncome({ desc, amount, date, icon }: { desc: string, amount: string, date: string, icon: JSX.Element }) {
   return (
      <div className="text-black w-[374px] h-[136px] px-6 py-4 gap-4 mt-4 rounded-2xl bg-[#FFFFFF]">
         <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center font-bold text-xl">
               {icon}
               <p className="font-normal">{desc}</p>
            </div>
            <h1 className="text-4xl font-bold">{amount}</h1>
            <p>{date}</p>
         </div>
      </div>
   )
}