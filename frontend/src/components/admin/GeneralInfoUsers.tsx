import IconUser from "../../assets/icons/IconUser"

export default function GeneralInfoUsers(){
    return(
        <div className="text-black w-[374px] h-[136px] px-6 py-4 gap-4 rounded-2xl bg-[#FFFFFF]">
        <div className="flex gap-2 items-center font-bold text-xl">
          <IconUser/>
          <p >Хэрэглэгч</p>
       </div>
       <h1 className="text-4xl font-bold">980</h1>
       <p>Өнөөдөр</p>
      </div>
    )
}