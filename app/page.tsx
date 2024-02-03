import react from 'react'

import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Preview from "../components/preview"





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
        </div>
      
    </div>
  );
}
