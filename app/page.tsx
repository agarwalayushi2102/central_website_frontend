import react from 'react'

import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Preview from "../components/preview"
// import Imgtext from "../components/Imgtext"
// import Card from "../components/Card"

// import MainForm from "../components/MainForm"
// import Carousels from "../components/templates/Carousels"
// import About from "../components/templates/About"




export default function Home() {
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-5'>
        <Navbar/>
      </div>
      <div className=''>
      <Sidebar/>
      </div>
      
        {/* <Form1/>
        
        <Form2/>
        <Template1/>
        <Template2/> */}
        <div className='col-span-4'>
          <h1 className='text-3xl font-semibold pl-8 pt-4 bg-[#ECECEC]'>Preview</h1>
          <Preview/>
          {/* <About/>
          <Carousels/> */}
          {/* <Imgtext/>
          <Carousels/>
          <MainForm/>
          <Card/> */}
        </div>
      
    </div>
  );
}
