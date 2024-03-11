<<<<<<< HEAD
import DashBoard from "@/app/dashboard/page"
import Navbar from "../components/Navbar";
=======
"use client";
import Image from "next/image";
import Signup from "./signup/page";
import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
>>>>>>> 3451148 (s3 uploader bug)

export default function Home() {

  return (
<<<<<<< HEAD
    <div className="bg-slate-50">
      <DashBoard/>
    </div>
  )
=======
    <Auth0Provider
      domain="dev-38aa32ihcs2hbtoe.us.auth0.com"
      clientId="oozFMxOD7tpeJzxNBSOXZpd9XcNz3NAj"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <Signup />
    </Auth0Provider>
  );
>>>>>>> 3451148 (s3 uploader bug)
}
