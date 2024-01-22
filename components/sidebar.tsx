"use client";
import React, {useState} from "react";

const sidebar = () => {
  const [home1,setHome1] = useState('inline w-6 h-6')
  const [home2,setHome2] = useState('hidden')

  function handleChange(){
   setHome1('hidden')
   setHome2('inline w-6 h-6')
  }

  function handleChange2(){
   setHome1('inline w-6 h-6')
   setHome2('hidden')
  }
  return (
    <div className=" bg-[#F6F6F6] flex flex-col  bottom-0 border-r-2 h-[100%] ]">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold pr-[0.7rem] mt-2 text-center">
          Home
     
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={home1}
            onClick={handleChange}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={home2}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" onClick={handleChange2}/>
</svg>

        </h1>

          
       
      </div>

          <h2 className="text-xl mt-3 font-medium ml-2">1.Welcome Card</h2>
          <img src="./Welcome Card.png" className="w-[95%] h-[9rem] rounded-lg mx-auto border-2"/>
          <h2 className="text-xl mt-3 font-medium ml-2">2.Events</h2>
          <img src="./events.png" className="w-[95%] h-[7rem] rounded-lg mx-auto border-2"/>
          <h2 className="text-xl mt-3 font-medium ml-2">3.Members</h2>
          <img src="./Members.png" className="w-[95%] h-[7rem] rounded-lg mx-auto border-2"/>

          <button className="w-[90%] h-[3.5rem] justify-center bg-[#5267D0] text-white text-xl font-medium mt-4 mx-auto rounded-2xl ">
            <img src="./Group 57.svg" className=" mr-2"/> Add
          </button>


      <div className="relative top-[243rem] w-full">
        <div className=" flex flex-col text-xl font-semibold py-2  bg-[white]  ">
          <span className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline mr-2 font-bold "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Edit color palatte
          </span>
          <span className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline mr-2  font-bold "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            More settings
          </span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default sidebar;
