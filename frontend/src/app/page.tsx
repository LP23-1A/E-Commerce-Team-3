"use client";
import UserNavbar from "@/components/userComponents/Navbar";
import useSWR from "swr";
import axios from "axios";
import Carousel from "@/components/userComponents/Carousel";
import { UserFooter } from "@/components/userComponents/Footer";
import { AbService } from "@/components/userComponents/AboutService";
import LatestProduct from "@/components/userComponents/LatestProduct";
import HighlightedProduct from "@/components/userComponents/HighlightedProduct";

export default function Home() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, isLoading } = useSWR("http://localhost:8000/product", fetcher);

  if (isLoading) {
    return <div>LoadiinG....</div>;
  }
  
  return (
    <div className=" h-auto">
      {/* <UserNavbar /> */}
      <Carousel data={data} />
      <HighlightedProduct data={data} />
      <LatestProduct data={data} />
      <AbService />
      <UserFooter />
    </div>
  );
}
