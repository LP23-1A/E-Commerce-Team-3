"use client";

import GeneralInfo from "@/components/GeneralInfo";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import withAuth from "@/components/Test";

const DashBoard = () => {
  const {user}= useAuth0()
  console.log(user)
  return (
    <div className="w-screen h-screen bg-gray-200 justify-center items-center">
      <Navbar/>
      <div className="flex gap-6">
        <Sidebar />
        <GeneralInfo />
      </div>
    </div>
  );
};

export default withAuth(DashBoard);
// "use client"
// import React, { useState } from 'react';


// function App() {
//   const [backgroundColor, setBackgroundColor] = useState('white');

//   const changeBackground = () => {
//     // Toggle between red and blue background color
//     setBackgroundColor(prevColor => prevColor === 'red' ? 'blue' : 'red');
//   };

//   return (
//     <div className="App" style={{ backgroundColor: backgroundColor }}>
//       <div className="container">
//         <button className="button" onClick={changeBackground}>Change Background</button>
//       </div>
//     </div>
//   );
// }

// export default App;
