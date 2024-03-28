'use client'
import { UserFooter } from "@/components/userComponents/Footer"
import UserNavbar from "@/components/userComponents/Navbar"
import { useRef } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
import jwt from 'jsonwebtoken'
import { setCookie } from "nookies";




const userLogin = () => {
    const router = useRouter()
  const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

    const input = useRef({
        email: '',
        password: ''
    })
    const handleBack = (field: string, value: string | number) => {
        input.current = { ...input.current, [field]: value }
    }
    const handlePost = async () => {
        try {
            const res = await axios.post(`${backendPoint}/sign/auth`, {
                email: input.current.email,
                password: input.current.password,
            })
            const { data } = res;
            const token = data.token;
            const code = jwt.decode(token)
            if (token) {
                setCookie(null, 'token', token, {
                  maxAge: 3600,
                })
            if (code.payload.role as String === 'admin') {
                router.push('/dashboard');
            } else {
                router.push('/');
            }}
        } catch (error) {
        }
    }
    return (
        <div className=" h-auto flex  flex-col justify-between  gap-[110px]">
            <UserNavbar />
            <div className="flex items-center flex-col gap-10 ">
                <div className=" bg-white shadow-lg rounded-md py-[24px] w-[496px] h-[450px] px-[32px] flex items-center flex-col ">
                    <p className=" font-[700] text-[34px]">Нэвтрэх</p>
                    <p className="text-[#9096B2] text-[17px] font-normal">Доорх мэдээллийн оруулж нэвтэрнэ үү</p>
                    <div className="mt-12 flex flex-col gap-2">
                        <p className="text-[14px] font-normal">Таны имэйл </p>
                        <input onChange={(e) => handleBack('email', e.target.value)} type="email" placeholder="Имэйл хаяг" className=" border-solid border border-slate-200 w-[432px] rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]" />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <p className="text-[14px] font-normal">Password</p>
                        <input
                            onChange={(e) => handleBack('password', e.target.value)}
                            placeholder="Нууц үг"
                            type="password"
                            className=" border-solid border border-slate-200 w-[432px]  rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]"
                        />
                    </div>
                    <div className="   flex justify-center items-center flex-col gap-2">
                        <button className="text-[#9096B2] text-[17px] font-normal"  >Нууц үгээ мартсан</button>
                        <button onClick={handlePost} className="bg-[#FB2E86] text-white   w-[432px]  h-[47px]   rounded-md">Нэвтрэх</button>
                        <button onClick={()=> router.push('/userSign')} className="text-[#9096B2] text-[17px] font-normal">Шинээр бүртгүүлэх</button>
                    </div>
                </div>
                <button onClick={()=> router.push('/login')} className="text-[#9096B2] text-[17px] font-normal">мерчант нэвтрэх</button >
            </div>
            <UserFooter />
        </div>
    )
}

export default userLogin
