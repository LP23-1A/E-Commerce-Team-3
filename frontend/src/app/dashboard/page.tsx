import GeneralInfo from "@/components/admin/GeneralInfo";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const DashBoard = () => {
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

export default DashBoard;
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
