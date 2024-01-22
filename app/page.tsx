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
          <Preview/>
        </div>
      
    </div>
  );
}
