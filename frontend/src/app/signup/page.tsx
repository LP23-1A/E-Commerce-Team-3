"use client";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../public/img/Pinecone Logo.png";
import Arrow from "@/assets/Arrow";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
<<<<<<< HEAD
      <img src={logo.src} className="mt-[30px] ml-[30px]" alt="" />
      <div className="  w-screen flex justify-center mt-[150px] ">
        <div className="flex flex-col py-6 px-8   items-center  w-[400px] bg-white border border-slate-200 rounded-2xl  ">
          <p className=" font-[700] text-[34px]">Бүртгүүлэх</p>
          <div className="mt-12 flex flex-col gap-2">
            <p className="text-[14px] font-normal">Таны имэйл </p>
            <input type="email" placeholder="Имэйл хаягаа оруулна уу" className="bg-[#F7F7F8] border-solid border border-slate-200 w-[350px] rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]"/>
=======
      <img src={logo.src} className="px-[44px] py-[44px]" alt="" />
      <div className="  w-full h-full z-10 flex justify-center items-center">
        <div className="flex flex-col p-5  mt-[111px] items-center w-[400px] bg-white   ">
          <p>Бүртгүүлэх</p>
          <div className="mt-12">
            <p className="text-[14px] font-normal">Таны Имэйл </p>
            <input
              type="email"
              placeholder="Имэйл хаягаа оруулна уу"
              className="bg-[#F7F7F8] border-solid border-2 border-black w-[350px] rounded-lg px-[20px] py-5 text-[#1C2024]" 
            />
>>>>>>> 3451148 (s3 uploader bug)
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-[14px] font-normal">Таны нэр</p>
            <input
              placeholder="Таны нэрээ оруулна уу"
              type="name"
<<<<<<< HEAD
              className="bg-[#F7F7F8] border-solid border border-slate-200 w-[350px] rounded-lg px-[20px] h-[56px] py-5 text-[#1C2024]"
=======
              className="bg-[#F7F7F8] border-solid border-2 border-black w-[350px] rounded-lg px-[20px] py-5 text-[#1C2024]" 
>>>>>>> 3451148 (s3 uploader bug)
            />
          </div>
<<<<<<< HEAD
          <div className="bg-black rounded-xl text-white flex items-center h-[56px] w-[350px] justify-between mt-8 px-6 cursor-pointer">
            <p className=""></p>
            <p className="">Дараах</p>
           <Arrow />
          </div>
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
=======
          <div className="mt-12 flex-col flex gap-8">
            <button className="flex items-center  gap-2 "
              onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
>>>>>>> 3451148 (s3 uploader bug)
            >
              <img
                width={"20px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhqZsr5q4Dz-ecvcVg_9WzU0VsmEw6l6pYYaq9RdWKw&s"
                alt=""
              />{" "}
              Microsoft-оор нэвтрэх
            </button>
<<<<<<< HEAD
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
=======
            <button className="flex items-center" onClick={() => loginWithRedirect({ connection: "github" })}>
              <img width={'50px'} src="data:image/jpeg;base64,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" alt="" /> Apple-аар нэвтрэх
>>>>>>> 3451148 (s3 uploader bug)
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
  );
};

export default Signup;
