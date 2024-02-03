"use client"
import React, {useState} from 'react'

const navbar = () => {
 const [websiteName,setWebsiteName] = useState("Website name")
  return (
    <div className='w-full bg-white text-black text-xl grid grid-cols-12 p-2 border-b-2 '>
       
        <div className='flex flex-row col-span-7'>
        <img src='./cynaptics.jpeg' className='h-9 w-9 rounded-full ml-4'/>
        <p className='ml-4 text-center'> You are editing "{websiteName}" </p>
        </div>
        
       
        <a href='#' className='text-right text-[#1D2A6E] font-semibold hover:underline  col-span-4'>Discard changes and exit</a>
        <a href='#' className='text-right  text-[#1D2A6E] font-semibold hover:underline pr-4'>Publish</a>
        
    </div>
  )
}

export default navbar