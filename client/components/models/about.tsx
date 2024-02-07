"use client"
import React from "react";
import { useEffect } from "react";

interface AboutProps {
  isOpen: boolean;
  handleClose: () => void;
}


const about = ({
  isOpen,
  handleClose
}: AboutProps) => {

  useEffect (() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
     e.key === 'Escape' ? handleClose() : null;
     document.body.addEventListener('keydown',closeOnEscapeKey);
     return () => {
     document.body.removeEventListener('keydown',closeOnEscapeKey);
     }
  }, [handleClose]);

  useEffect (() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'unset';
    };
   }, [isOpen]);


  if (!isOpen) return null;
  return (
    <div className="fixed backdrop-brightness-50 flex justify-center items-center w-full h-full">
      <div className="bg-[#F3F3F3] w-[55%] h-[80%]  flex flex-row">
        
          
          
      
        <div className="flex flex-col w-full items-center ">
          <div className="grid grid-cols-7 w-[100%] mt-4">
          <h1 className="text-2xl font-bold underline text-center mt-2 ">About <img src="/edit.svg" className="inline h-6 w-6"/></h1>
            <span className="col-span-4 text-2xl font-semibold pt-1 text-[#585E7C] text-right">
              Template 6 <img src="/downcap.svg" className="inline" />
            </span>
            <button
              className="text-2xl font-semibold text-right text-[#585E7C] hover:text-red-600"
              onClick={() => {
                handleClose()
              }
                }
            >
              Delete
            </button>
            <button className="text-2xl font-semibold text-center text-[#585E7C] hover:text-[#5267D0] ">
              Save
            </button>
          </div>
          <div className="flex flex-col items-center w-[60%] mx-auto ">
            
          <form className="flex flex-col w-full py-2 mt-8">
            <label htmlFor="Title" className="text-md font-medium text-[#646464]">TITLE</label>
            <input id="Title" placeholder="Name" type="text" className="w-full h-10 bg-white text-lg font-semibold my-1 rounded-lg px-4"/>
            <label htmlFor="Description" className="text-md font-medium text-[#646464] mt-4">DESCRIPTION</label>
            <textarea id="Description" placeholder="PROVIDE A DESCRIPTION" className="w-full h-[27rem] bg-white text-lg font-semibold my-1 rounded-lg px-4 resize-none py-1"/>
            
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;