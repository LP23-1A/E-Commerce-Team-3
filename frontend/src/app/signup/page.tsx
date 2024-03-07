"use client";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../public/img/Pinecone Logo.png";

const Signup = () => {
  const { loginWithRedirect } = useAuth0(); 
  return (
    <div>
      <img src={logo.src} className="px-[44px] py-[44px]" alt="" />
      <div className="  w-full h-full z-10 flex justify-center items-center">
        <div className="flex flex-col p-5  mt-[111px] items-center w-[400px] bg-white   ">
          <p className=" font-[700] text-[34px]" >Бүртгүүлэх</p>
          <div className="mt-12">
            <p className="text-[14px] font-normal">Таны Имэйл </p>
            <input
              type="email"
              placeholder="Имэйл хаягаа оруулна уу"
              className="bg-[#F7F7F8] border-solid border-2 border-black w-[350px] rounded-lg px-[20px] py-5 text-[#1C2024]" 
            />
          </div>
          <div>
            <p className="text-[14px] font-normal">Таны нэр</p>
            <input
            placeholder="Таны нэрээ оруулна уу"
              type="name"
              className="bg-[#F7F7F8] border-solid border-2 border-black w-[350px] rounded-lg px-[20px] py-5 text-[#1C2024]" 
            />

          </div>
          <div className="mt-12 flex-col flex gap-8">
            <button className="flex  items-center bg-[#F7F7F8] w-[350px]  rounded-lg px-[30px] py-3 text-[#1C2024] hover:bg-black hover:text-white gap-2 "
              onClick={() => loginWithRedirect()}
            >
              <img className=" rounded-lg" width={'50px'} src="https://i.pinimg.com/originals/b7/86/79/b786795a5bfba85a9d0422b015d2a460.jpg" alt="" /> <span>Google-ээр нэвтрэх</span>
            </button>
            <button className="flex items-center bg-[#F7F7F8] w-[350px] rounded-lg px-[30px] py-3 text-[#1C2024] hover:bg-black hover:text-white gap-1" onClick={() => loginWithRedirect()}>
              <img width={'40px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhqZsr5q4Dz-ecvcVg_9WzU0VsmEw6l6pYYaq9RdWKw&s" alt="" /> Microsoft-оор нэвтрэх
            </button>
            <button className="flex gap-3 bg-[#F7F7F8] w-[350px] rounded-lg px-[30px] py-3 text-[#1C2024] hover:bg-black hover:text-white items-center" onClick={() => loginWithRedirect()}>
              <img className=" rounded-lg" width={'50px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEUAAAD///9DQ0P7/PvKzMnZ3d6tsKzz9PKLjYrX2db4+fh7fnrm5+Wkp6PHycYVGRTR09Cvs7UOEA1KTUqQk4+4ureqrKoeIR03OjYcHhwYGRducGycn5t1eHQ8PjuRkpAoKyZXWlcHDgNiZWAuMC1RUlASFhBYVk/i4d63trFkYl0sKiQXFQseHBZ1cmzt6+c5MiwXDQB/eXhoYGEfGBgVDQ6hm5tWUlJEPz+PiYmDf36ppqkiHyM5Njl4dHjHxMcdIyUTGBo0PD9DS00mZxnlAAAEiUlEQVR4nO3c21raQBQF4IwBE0KEpArSAirVWmw9tNV6rDXa93+nCjF8CTOgldnsbbr+67nYi2SOJHEcAAAAAAAAAAAAAAAAAAAAAAAAAPifvFvfaLW5i6CzWa8ESqngHXchRDqrnkq95y6FRLOlJja5i6HgK1XqhJ1aPqD7gbse67pBPqA64a7Hug1VVOMuyLbeVEDV4q7IMi2g6nOXZFddC6i2uGuyal0PWLJuGOoJt7lrsmpND+jucBdlU0cPWLKRtGJI2OEuyqZB6S9hw5CwyV2UTVuGgD53UVbpqxkVcddk11AL6O1x12TVjn4JB9w12dXXAna5S7JsdTpgyfYU2lwRlO0KOk7hbEYNy7VnGitsK9a4q6GQSxi9/cVos6mf1EdP8dzG9CSxv9n8uJy6bNjs9irD8OQkDGstvxBlPNJ4kZ+/flv9cWvPC4e1tf5buLJ+rXgU6lX8ydXZ7fndlfxfFIN26BZau8MN2cffnZYyierGxm3P2LqyvuyyX2zPnG+ssVv8e2nHr81uHAnN2HNn15zerp/SO3D/kx/Nb6tWBW4aV/R9gyHl43BSC80351TLXe5A0wzHvAvqcUcq0tbUFlS4Q+WZjl8WV5MzcZiOCG0I97mTPaG5giND7mipA7KAQs6ppv/PtWuVO575FNuexgp3PuOfZdaIOOag7IQiZovPhAFl/GPzksXoKx1wZxs7pgvY4M6WmrPHW5CQuZ6uFwZfubOl6AbSY+5oqcOXbGVfRUgndL5QBVRC7lG6m1TGROEQLtgOuZM9OaIKKKUX0k33X7iTZdpEAb0j7mQZqsMLOWdsJ0QJ5TyLSRRQTjekSuhecgfLfCVKKGeguSRKKOftkhWihCF3sAkkfK3y36WelHU3WcJAzMNgpiearRAz43+jSnjNnSzznSqhmO0h2bpUznRBdtIm5nmh6PlaX0fMFxbIjto87mSZc6qE6gd3tCenZAmljDVnZAnFTIlkg6nyfnJnS1E9CqXEnOvTDTVSBpsLwoQyzqPO6DriY1c84443QraqGQklRLyiTKg8ATcq1TY/85s7IOkDQ2MH7PMi5Xwx5nGvbqjOvXNC5pmR+jYdcS84E9KOpinm7eISEp7zJpzzMpctvAGXMNbcMCekXbmN/OJOSHeWkYq5AzpOlTSge8udz3F+kyYUcAlpL2LA3gtHKHsi81yYobuIUk6/6ebEU+5omZgo4B13sAmiIykZw0zqmiThFXesPIq1m4j3RyduCRIKWM3k2f/igLivZNm+T+U8kZFJguer/gfePXcg3a7VhCK/xXdjMaCcp9kL7P1jKuMVYANbL0JVuYPMlNhZvYUCR5nMg40B1Uu4Y8zzsPhVDBPuEPPtze6LbhjF2/617/fi6uwfoppwR3iWeUR17+r5j3jcD3rmkwE5W8I5tg133naitxvc6Q3fyIehk6n39qqzPlGSTB0O3CXLLHMhD/Gko3nxn3kt/WowafiwrPLsGNTX4rjXnxtvbK/rt+P2tciFKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBn9BcakTE8Z0+SZAAAAAElFTkSuQmCC" alt="" /> Apple-аар нэвтрэх
            </button>
            <p className="font-[400] text-[14px] text-center">Бүртгэлтэй юу? <span className="font-[500] text-[14px]">Нэвтрэх</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
