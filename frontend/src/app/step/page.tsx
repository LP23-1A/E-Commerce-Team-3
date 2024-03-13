"use client";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import logo from "../../../public/img/Pinecone Logo.png";
import withAuth from "@/components/Test";
const steps = ["Байршил", "Мэдээлэл"];

const StepPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [data,setData]=useState({
    district:'',
    khoroo:'',
    city:'',
      phoneNumber:'',
      address:"",
      zipCode:"",
      cardId:''
  })

const router = useRouter()
  const {user}= useAuth0()
console.log(user)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit =  async() => {
  

  const address = `${data.city},${data.district},${data.khoroo} `
  try {
    const res = await axios.post('http://localhost:8000/sign',{
    username:user?.given_name,
    email:user?.email,
    phoneNumber:data.phoneNumber,
    address:address,
    zipCode:data.zipCode,
    cardId:data.cardId,
    createdAt:Date

    }
    )
    router.push('/dashboard')
  } catch (error) {
    console.log(error)
  }
  };

  return (
    <div>
      <img src={logo.src} className="px-[44px] py-[44px]" alt="" />
     <div className="flex items-center justify-center mb-8">
        <div className="flex gap-[400px] justify-center">
          {steps.map((label, index) => (
            <div key={label} className={`text-center flex  flex-col items-center ${index === activeStep ? 'text-white font-bold' : 'text-gray-500'}`}>
              <div  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-black ${index=== activeStep ? 'bg-black':'bg-white'}`}>
                {index + 1}
              </div>
              <p className="mt-1 text-black ">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {activeStep === steps.length ? (
          <div></div>
        ) : (
          <div>
            <div>
              {activeStep === 0 && (
                <div className="mt-[100px]"> 
                  <p className=" font-[700] text-[34px]">Бүс нутгийн мэдээлэл</p>
                  <p className=" font-[700] text-[16px]" >Хот/Аймаг</p>
                  <input className="bg-[#F7F7F8] border-solid border-2 border-black w-[450px] rounded-lg px-[20px] py-5 text-[#1C2024]" type="text" value={data.city} onChange={(e)=> setData({...data ,city:e.target.value})} placeholder="City" />
                  <p className=" font-[700] text-[16px]" >Сум/Дүүрэг</p>
                  <input className="bg-[#F7F7F8] border-solid border-2 border-black w-[450px]  rounded-lg px-[20px] py-5 text-[#1C2024]" type="text" value={data.district} onChange={(e)=> setData({...data , district:e.target.value})} placeholder="District" />
                  <p className=" font-[700] text-[16px]">Хороо</p>
                  <input className="bg-[#F7F7F8] border-solid border-2 border-black w-[450px]  rounded-lg px-[20px] py-5 text-[#1C2024]" type="text" value={data.khoroo} onChange={(e)=> setData({...data , khoroo:e.target.value})} placeholder="Khoroo" />
                </div> 
              )}
              {activeStep === 1 && (
                <div  className="mt-[100px]">
                  <p className=" font-[700] text-[34px]">Мэдээлэл</p>
                  <p className=" font-[700] text-[16px]" >Phone Number</p>

                  <input placeholder="Phone Numnber" className="bg-[#F7F7F8] border-solid border-2 border-black w-[450px] rounded-lg px-[20px] py-5 text-[#1C2024]"  type="cardId" value={data.phoneNumber} onChange={(e)=> setData({...data , phoneNumber:e.target.value})}  />
              
                  <p className=" font-[700] text-[16px]" >Card number</p>
               <input placeholder="Card number" className="bg-[#F7F7F8] border-solid border-2 border-black w-[450px] rounded-lg px-[20px] py-5 text-[#1C2024]"  type="cardId" value={data.cardId} onChange={(e)=> setData({...data , cardId:e.target.value})}  />
                  <p className=" font-[700] text-[16px]">Zipcode  </p>
              <input placeholder="ZipCode" className="bg-[#F7F7F8] border-solid border-2 border-black w-[450px] rounded-lg px-[20px] py-5 text-[#1C2024]"  type="number" value={data.zipCode} onChange={(e)=> setData({...data , zipCode:e.target.value})} />
                </div>
              )}
            </div>
            <div className="flex justify-center gap-[200px] mt-6">
              <button className="bg-[#F7F7F8] rounded-lg px-[30px] py-3 text-[#1C2024] hover:bg-black hover:text-white" disabled={activeStep === 0} onClick={handleBack}>
                {"<"}
              </button>
              <button className="bg-[#F7F7F8]  rounded-lg px-[30px] py-3 text-[#1C2024] hover:bg-black hover:text-white"
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
              >
                {"Дараах->"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepPage;
