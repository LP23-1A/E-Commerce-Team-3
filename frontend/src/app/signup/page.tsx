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
          <p>Бүртгүүлэх</p>
          <div className="mt-12">
            <p className="text-[14px] font-normal">Таны Имэйл </p>
            <input
              type="email"
              placeholder="Имэйл хаягаа оруулна уу"
              className="px-4 w-[352px] h-12 border rounded-sm bg-[#F7F7F8] text-[#8B8E95] "
            />
          </div>
          <div>
            <p className="text-[14px] font-normal">Таны нэр</p>
            <input
              type="name"
              className="px-4 w-[352px] h-12 border rounded-sm bg-[#F7F7F8] text-[#8B8E95] "
            />

            <button className=" text-[14px] font-normal text-right">
              Next
            </button>
          </div>
          <div className="mt-12 flex-col flex gap-8">
            <button
              onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
            >
              sign in with google
            </button>
            <button onClick={() => loginWithRedirect({ connection: "github" })}>
              sign in with github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
