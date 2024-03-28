"use client";
import UserNavbar from "@/components/userComponents/Navbar";
import useSWR from "swr";
import axios from "axios";
import Carousel from "@/components/userComponents/Carousel";
import { UserFooter } from "@/components/userComponents/Footer";
import { AbService } from "@/components/userComponents/AboutService";
import LatestProduct from "@/components/userComponents/LatestProduct";
import HighlightedProduct from "@/components/userComponents/HighlightedProduct";
import Topbar from "@/components/userComponents/Topbar";

export default function Home() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT
  const { data, isLoading } = useSWR(`${backendPoint}/product`, fetcher);
  console.log(data)
  if (isLoading) {
    return <div>LoadiinG....</div>;
  }
  
  return (
    <div className=" h-auto">
      <UserNavbar />
      <Topbar/>
      <Carousel data={data} />
      <HighlightedProduct data={data} />
      <LatestProduct data={data} />
      <AbService />
      <UserFooter />
    </div>
  );
}
