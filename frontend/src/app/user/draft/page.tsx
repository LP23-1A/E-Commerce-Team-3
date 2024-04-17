"use client"
import {NextPage} from "next"
import { useDraft } from "@/components/userComponents/DraftContext"
import { UserFooter } from "@/components/userComponents/Footer"
import UserNavbar from "@/components/userComponents/Navbar"
import { useBasket } from "@/components/userComponents/OrderContext"
import Topbar from "@/components/userComponents/Topbar"
import{ useRouter} from "next/navigation" 
import { parseCookies, setCookie } from "nookies"
import { useEffect } from "react"


const Draft:NextPage = () => {

    const {draft , setDraft} = useDraft()
    const { addToCart } = useBasket();
    const router = useRouter()

    useEffect(() => {
        const cookies = parseCookies();
        const draftFromCookie = cookies.draft;
        
        if (draftFromCookie) {
          setDraft(JSON.parse(draftFromCookie));
        }
      }, []);

      const clearDraftItem = (index:number) => {
        const updatedDraft = draft.filter((_, i) => i !== index);
        setDraft(updatedDraft);
        setCookie(null, "draft", JSON.stringify(updatedDraft));
      };

      const handleAddtoCard = (id:string , index:number) => {
      
        const removeDraft = draft.filter((_ , i) => i !== index);
        setDraft(removeDraft);
        setCookie(null , "draft" , JSON.stringify(removeDraft))
        addToCart(id)
        console.log(id);
        

      }
     
      

    return(
        <div>
            <UserNavbar/>
            <Topbar/>
           <div className="flex flex-col px-[350px] py-10">
            <div className="flex flex-col">
                <p className="text-[#151875] font-bold text-[22px]">Хадгалсан бүтээгдэхүүн </p>
                <p className="text-[#8A8FB9] text-[12px]">{draft.length} бүтээгдэхүүн  </p>
            </div>
           {draft && draft.map((el , index) => {
            return(
                <div key={el.productId} className="flex py-4 ">
                <button className="bg-[#EBF4F3] w-[270px] h-[270px] flex justify-center items-center p-4">
                    <img src={el?.images[0]} ></img>
                </button>
                <div className=" flex flex-col h-[270px] w-[608px] p-4 justify-between">
                    <div className="flex flex-col  gap-4">
                        <p className="text-[#151875]">{el?.productName}</p>
                        <div>
                            <p className="text-[#151875]">{el?.price}</p>
                        </div>
                        <p className="text-[#9295AA]">{el?.description}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={()=>handleAddtoCard(el.productId , index)} className="bg-[#FB2E86] rounded py-3 px-6 font-bold text-[16px] text-[#fff]">Худалдан авах</button>
                        <button onClick={() => clearDraftItem(index)} className="text-[#535399] font-bold text-[16px] bg-[#F6F5FF] rounded py-3 px-6">Хасах</button>
                    </div>
                </div>
                <div>
                </div>
            </div> 
            )
           })}
           </div>
            <UserFooter/>
        </div>
    )
}

export default Draft