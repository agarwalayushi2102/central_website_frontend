"use client"
import React, {useState} from 'react'

const navbar = () => {
 const [websiteName,setWebsiteName] = useState("Website name")
  return (
    <div className='w-full bg-white text-black text-xl flex flex-row p-2 border-b-2 '>
       
        <img src='./cynaptics.jpeg' className='h-9 w-9 rounded-full ml-4'/>
        <p className='ml-4 text-center'> You are editing "{websiteName}" </p>
        
       
        <a href='#' className='mr-4 text-[#1D2A6E] hover:underline ml-[50%]'>Discard changes and exit</a>
        <a href='#' className='ml-4 text-[#1D2A6E] hover:underline mr-2'>Publish</a>
        
    </div>
  )
}

export default navbar