import IconIncome from "../../assets/icons/IconIncome";

export default function GeneralInfoIncome() {
    return(
       <div className="text-black w-[374px] h-[136px] px-6 py-4 gap-4 rounded-2xl bg-[#FFFFFF]">
         <div className="flex gap-2 items-center font-bold text-xl">
           <IconIncome/>
           <p >Орлого</p>
        </div>
        <h1 className="text-4xl font-bold">235,000₮</h1>
        <p>Өнөөдөр</p>
       </div>
    )
}