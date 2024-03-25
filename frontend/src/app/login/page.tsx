'use client'
import logo from "../../../public/img/Pinecone Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import Arrow from "@/assets/Arrow";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken"


const  Login = () => {
    const router = useRouter()
   const input = useRef({
    email:'',
    password:''
   })
   const handleBack = (field: string, value: string | number) =>{

    input.current = { ...input.current,[field]:value   }
   }
   const handlePost = async () =>{
    try {
        const res = await axios.post('http://localhost:8000/sign/auth',{
            email:input.current.email,
            password:input.current.password,
                })

                const { data } = res;
                const token = data.token;
              const code = jwt.decode(token)
              if (code.payload.role as String === 'admin') {
                router.push('/dashboard');
              } else {
                router.push('/signup');
              }
    } catch (error) {
    }
   }
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
    <img src={logo.src} className="mt-[30px] ml-[30px]" alt="" />
    <div className="  w-screen flex justify-center mt-[150px] ">
      <div className="flex flex-col py-6 px-8   items-center  w-[400px] bg-white border border-slate-200 rounded-2xl  ">
        <p className=" font-[700] text-[34px]">Login</p>
        <div className="mt-12 flex flex-col gap-2">
          <p className="text-[14px] font-normal">Таны имэйл </p>
          <input onChange={(e)=> handleBack('email', e.target.value)} type="email" placeholder="Имэйл хаягаа оруулна уу" className="bg-[#F7F7F8] border-solid border border-slate-200 w-[350px] rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]"/>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-[14px] font-normal">Password</p>
          <input
          onChange={(e)=> handleBack('password', e.target.value)}
            placeholder="Password"
            type="password"
            className="bg-[#F7F7F8] border-solid border border-slate-200 w-[350px] rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]"
          />
        </div>
        <button onClick={handlePost} className="bg-black rounded-xl text-white flex items-center h-[56px] w-[350px] justify-between mt-8 px-6 cursor-pointer">
          <p className=""></p>
          <p className="">Дараах</p>
         <Arrow />
        </button>
        <div className="mt-8 flex-col flex gap-4">
          <hr className="border-b border-slate-100"></hr>
          <button
            className="flex  items-center bg-[#1C20240A] w-[350px] h-[48px] rounded-lg px-[30px] py-3 text-[#1C2024] gap-3 justify-center "
            onClick={() => loginWithRedirect()}
          >
            <img
              className=" rounded-lg"
              width={"30px"}
              src="https://i.pinimg.com/originals/b7/86/79/b786795a5bfba85a9d0422b015d2a460.jpg"
              alt=""
            />{" "}
            <span>Google-ээр нэвтрэх</span>
          </button>
          <button
            className="flex items-center bg-[#1C20240A] w-[350px] rounded-lg px-[30px] py-3 text-[#1C2024] gap-3 h-[48px] justify-center"
            onClick={() => loginWithRedirect()}
          >
            <img
              width={"20px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhqZsr5q4Dz-ecvcVg_9WzU0VsmEw6l6pYYaq9RdWKw&s"
              alt=""
            />{" "}
            Microsoft-оор нэвтрэх
          </button>
          <button
            className="flex gap-3 bg-[#1C20240A] w-[350px] rounded-lg px-[30px] py-3 text-[#1C2024] items-center justify-center h-[48px] "
            onClick={() => loginWithRedirect()}
          >
            <img
              className=" rounded-lg"
              width={"24px"}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEUAAAD///9DQ0P7/PvKzMnZ3d6tsKzz9PKLjYrX2db4+fh7fnrm5+Wkp6PHycYVGRTR09Cvs7UOEA1KTUqQk4+4ureqrKoeIR03OjYcHhwYGRducGycn5t1eHQ8PjuRkpAoKyZXWlcHDgNiZWAuMC1RUlASFhBYVk/i4d63trFkYl0sKiQXFQseHBZ1cmzt6+c5MiwXDQB/eXhoYGEfGBgVDQ6hm5tWUlJEPz+PiYmDf36ppqkiHyM5Njl4dHjHxMcdIyUTGBo0PD9DS00mZxnlAAAEiUlEQVR4nO3c21raQBQF4IwBE0KEpArSAirVWmw9tNV6rDXa93+nCjF8CTOgldnsbbr+67nYi2SOJHEcAAAAAAAAAAAAAAAAAAAAAAAAAPifvFvfaLW5i6CzWa8ESqngHXchRDqrnkq95y6FRLOlJja5i6HgK1XqhJ1aPqD7gbse67pBPqA64a7Hug1VVOMuyLbeVEDV4q7IMi2g6nOXZFddC6i2uGuyal0PWLJuGOoJt7lrsmpND+jucBdlU0cPWLKRtGJI2OEuyqZB6S9hw5CwyV2UTVuGgD53UVbpqxkVcddk11AL6O1x12TVjn4JB9w12dXXAna5S7JsdTpgyfYU2lwRlO0KOk7hbEYNy7VnGitsK9a4q6GQSxi9/cVos6mf1EdP8dzG9CSxv9n8uJy6bNjs9irD8OQkDGstvxBlPNJ4kZ+/flv9cWvPC4e1tf5buLJ+rXgU6lX8ydXZ7fndlfxfFIN26BZau8MN2cffnZYyierGxm3P2LqyvuyyX2zPnG+ssVv8e2nHr81uHAnN2HNn15zerp/SO3D/kx/Nb6tWBW4aV/R9gyHl43BSC80351TLXe5A0wzHvAvqcUcq0tbUFlS4Q+WZjl8WV5MzcZiOCG0I97mTPaG5giND7mipA7KAQs6ppv/PtWuVO575FNuexgp3PuOfZdaIOOag7IQiZovPhAFl/GPzksXoKx1wZxs7pgvY4M6WmrPHW5CQuZ6uFwZfubOl6AbSY+5oqcOXbGVfRUgndL5QBVRC7lG6m1TGROEQLtgOuZM9OaIKKKUX0k33X7iTZdpEAb0j7mQZqsMLOWdsJ0QJ5TyLSRRQTjekSuhecgfLfCVKKGeguSRKKOftkhWihCF3sAkkfK3y36WelHU3WcJAzMNgpiearRAz43+jSnjNnSzznSqhmO0h2bpUznRBdtIm5nmh6PlaX0fMFxbIjto87mSZc6qE6gd3tCenZAmljDVnZAnFTIlkg6nyfnJnS1E9CqXEnOvTDTVSBpsLwoQyzqPO6DriY1c84443QraqGQklRLyiTKg8ATcq1TY/85s7IOkDQ2MH7PMi5Xwx5nGvbqjOvXNC5pmR+jYdcS84E9KOpinm7eISEp7zJpzzMpctvAGXMNbcMCekXbmN/OJOSHeWkYq5AzpOlTSge8udz3F+kyYUcAlpL2LA3gtHKHsi81yYobuIUk6/6ebEU+5omZgo4B13sAmiIykZw0zqmiThFXesPIq1m4j3RyduCRIKWM3k2f/igLivZNm+T+U8kZFJguer/gfePXcg3a7VhCK/xXdjMaCcp9kL7P1jKuMVYANbL0JVuYPMlNhZvYUCR5nMg40B1Uu4Y8zzsPhVDBPuEPPtze6LbhjF2/617/fi6uwfoppwR3iWeUR17+r5j3jcD3rmkwE5W8I5tg133naitxvc6Q3fyIehk6n39qqzPlGSTB0O3CXLLHMhD/Gko3nxn3kt/WowafiwrPLsGNTX4rjXnxtvbK/rt+P2tciFKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBn9BcakTE8Z0+SZAAAAAElFTkSuQmCC"
              alt=""
            />{" "}
            Apple-аар нэвтрэх
          </button>
          <hr className="border-b border-slate-100 mt-5" />
          <p className="font-[400] text-[14px] text-center cursor-pointer text-[#525252] flex gap-3 justify-center items-center font-light">
            Бүртгэлтэй юу?{" "}
            <span className="font-[500] text-[14px] text-black underline">Нэвтрэх</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
