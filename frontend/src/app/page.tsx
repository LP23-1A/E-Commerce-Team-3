'use client'
import UserNavbar from "@/components/userComponents/Navbar";
import useSWR from "swr";
import axios from "axios";
import Carousel from "@/components/userComponents/Carousel";

export default function Home() {
  const fetcher = url => axios.get(url).then(res => res.data)

  const { data , isLoading} = useSWR(
    'http://localhost:8000/product',fetcher)

    if (isLoading) {
      return <div>LoadiinG....</div>
    }

  return (
    <div className="bg-slate-50 h-auto">
<<<<<<< HEAD
      {/* <UserNavbar/> */}
      <DashBoard/>
=======
      <UserNavbar/>
<Carousel data={data}/>
>>>>>>> 620051b (carousel duusav)
    </div>
  )
}
