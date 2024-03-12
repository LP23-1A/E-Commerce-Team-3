import IconOrder from "../assets/IconOrder"

export default function GeneralInfoOrder() {
    return(
        <div className="text-black w-[374px] h-[136px] px-6 py-4 gap-4 rounded-2xl bg-[#FFFFFF]">
       <div className="flex flex-col gap-2">
       <div className="flex gap-2 items-center font-bold text-xl">
          <IconOrder/>
          <p className="font-normal">Захиалга</p>
       </div>
       <h1 className="text-4xl font-bold">58</h1>
       <p>Өнөөдөр</p>
       </div>
      </div>
    )
}