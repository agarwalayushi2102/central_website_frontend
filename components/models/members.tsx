"use client"
import React from "react";
import { useEffect } from "react";

interface MemberProps {
  isOpen: boolean;
  handleClose: () => void;
}


const members = ({
  isOpen,
  handleClose
}: MemberProps) => {

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
      <div className="bg-[#F3F3F3] w-[60%] h-[97%]  flex flex-row">
        <div className="w-[25%] h-full bg-[#E5E5E5] flex flex-col items-center">
          <h1 className="text-2xl font-bold underline text-center mt-2">Members <img src="/edit.svg" className="inline h-6 w-6"/>
          </h1>
          <button className="w-[92%] h-[3rem] text-2xl bg-white rounded-xl font-semibold active:text-white active:bg-[#5267D0] justify-center mt-[14rem] mb-2">1. Name Surname</button>
          <button className="w-[92%] h-[3rem] text-2xl bg-white rounded-xl font-semibold active:text-white active:bg-[#5267D0] justify-center my-2">2. Name Surname</button>
          <button className="w-[92%] h-[3rem] text-2xl bg-white rounded-xl font-semibold text-[#5267D0] my-2">+ Add</button>
        </div>
        <div className="flex flex-col w-[75%] items-center ">
          <div className="grid grid-cols-7 w-[100%]">
            <span className="col-span-5 text-2xl font-semibold pt-1 text-[#585E7C] text-right">
              Template 1 <img src="/downcap.svg" className="inline" />
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
          <div className="flex flex-col items-center w-[80%] ">
            <div className="w-[16rem] h-[16rem] mt-4 bg-[#5267D04D] rounded-xl p-2 flex items-center justify-center">
              <a href="#"><img src="/upload img.png" className=""/></a>
              </div>
          <form className="flex flex-col w-full py-2">
            <label htmlFor="Title" className="text-md font-medium text-[#646464]">TITLE</label>
            <input id="Title" placeholder="Name" type="text" className="w-full h-10 bg-white text-lg font-semibold my-1 rounded-lg px-4"/>
            <label htmlFor="Description" className="text-md font-medium text-[#646464] mt-4">DESCRIPTION</label>
            <input id="Description"type="text" placeholder="PROVIDE A DESCRIPTION" className="w-full h-10 bg-white text-lg font-semibold my-1 rounded-lg px-4"/>
            <label htmlFor="socialmediabuttons" className="text-md font-medium text-[#646464] mt-4">SOCIAL MEDIA BUTTONS (APPEAR ON HOVER)</label>
            <div className="flex flex-row ">
            <input  placeholder='LINK' type="url" className="w-[70%] h-10 bg-white text-lg font-semibold my-1 rounded-l-lg px-4"/>
            <select className="w-[30%] h-10 bg-white text-lg font-semibold my-1 rounded-r-lg px-4 ">
              <option>Choose icon</option>
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>GitHub</option>
            </select>
            </div>
            <div className="flex flex-row ">
            <input  placeholder='LINK' type="url" className="w-[70%] h-10 bg-white text-lg font-semibold my-1 rounded-l-lg px-4"/>
            <select className="w-[30%] h-10 bg-white text-lg font-semibold my-1 rounded-r-lg px-4 ">
              <option>Choose icon</option>
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>GitHub</option>
            </select>
            </div>
            <div className="flex flex-row ">
            <input  placeholder='LINK' type="url" className="w-[70%] h-10 bg-white text-lg font-semibold my-1 rounded-l-lg px-4"/>
            <select className="w-[30%] h-10 bg-white text-lg font-semibold my-1 rounded-r-lg px-4 ">
              <option>Choose icon</option>
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>GitHub</option>
            </select>
            </div>
            <div className="flex flex-row ">
            <input  placeholder='LINK' type="url" className="w-[70%] h-10 bg-white text-lg font-semibold my-1 rounded-l-lg px-4"/>
            <select className="w-[30%] h-10 bg-white text-lg font-semibold my-1 rounded-r-lg px-4 ">
              <option>Choose icon</option>
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>GitHub</option>
            </select>
            </div>
            <button className="bg-[#CB4E4E] h-10 text-white w-full text-lg font-semibold my-2 rounded-lg mx-auto">Delete</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default members;
