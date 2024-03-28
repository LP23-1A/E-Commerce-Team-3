'use client'
import { UserFooter } from "@/components/userComponents/Footer"
import UserNavbar from "@/components/userComponents/Navbar"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";




const userSignUp = () => {
    const router = useRouter()
    const [error, setError] = useState('');
  const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

    const input = useRef({
        email: '',
        password: '',
        repassword:''
    })

    const handleBack = (field: string, value: string | number) => {
        input.current = { ...input.current, [field]: value }
    }

    const handleValidation = () => {
        if (input.current.password !== input.current.repassword) {
            setError("Passwords do not match.");
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    const handlePost = async () => {
 if (!handleValidation()) {
        return;
    }
        try {
            const res = await axios.post(`${backendPoint}/sign`, {
                email: input.current.email,
                password: input.current.password,
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=" h-auto flex  flex-col justify-between  gap-[110px]">
            <UserNavbar />
            <div className="flex items-center flex-col gap-10 ">
                <div className=" bg-white shadow-lg rounded-md py-[24px] w-[496px] h-fit px-[32px] flex items-center flex-col ">
                    <p className=" font-[700] text-[34px]">Бүртгүүлэхх</p>
                    <p className="text-[#9096B2] text-[17px] font-normal">Доорх мэдээллийг бөглөнө үү</p>
                    <div className="mt-12 flex flex-col gap-2">
                        <input onChange={(e) => handleBack('email', e.target.value)} type="email" placeholder="Имэйл хаяг" className=" border-solid border border-slate-200 w-[432px] rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]" />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <input
                            onChange={(e) => handleBack('password', e.target.value)}
                            placeholder="Нууц үг"
                            type="password"
                            className=" border-solid border border-slate-200 w-[432px]  rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]"
                        />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <input
                            onChange={(e) => handleBack('repassword', e.target.value)}
                            placeholder="Нууц үг давтах"
                            type="password"
                            className=" border-solid border border-slate-200 w-[432px]  rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]"
                        />
                    </div>
                    <div className="   flex justify-center items-center flex-col gap-2">
                        <button className="text-[#9096B2] text-[17px] font-normal"  >Нууц үгээ мартсан</button>
                        <button onClick={handlePost} className="bg-[#FB2E86] text-white   w-[432px]  h-[47px]   rounded-md">Бүртгүүлэх</button>
                        <button  onClick={()=> router.push('/userLogin')} className="text-[#9096B2] text-[17px] font-normal">Нэвтрэх хэсэг</button>
                    </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button onClick={()=> router.push('/login')} className="text-[#9096B2] text-[17px] font-normal">мерчант нэвтрэх</button>
            </div>
            <UserFooter />
        </div>
    )
}

export default userSignUp
