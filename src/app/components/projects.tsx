 'use client'
import React, { useState } from 'react'

const Projects = () => {
  const [display,setDisplay] = useState('hidden')
  const [displayButton,setDisplayButton] = useState('text-xl bg-cyan-600 text-white border-2 border-cyan-600 rounded-lg w-[8rem] p-2 hover:bg-white hover:text-cyan-600 mt-4 mb-4 mx-auto')
  const [displayButton2,setDisplayButton2] = useState('hidden')
   
  const loadMore = ()=>{
   setDisplay('flex flex-col items-center w-[27%] bg-white border-4 text-cyan-400 hover:bg-cyan-400 hover:text-white  my-4 mx-auto hover:border-4 hover:border-green-800  max-[912px]:w-[47%] max-[572px]:w-[85%]')
   setDisplayButton('hidden')
   setDisplayButton2('text-xl bg-cyan-600 text-white border-2 border-green-700 rounded-lg w-[8rem] p-2 hover:bg-white hover:text-green-500 mt-4 mb-4 mx-auto')
  }

  const loadLess = () =>{
    setDisplay('hidden')
    setDisplayButton('text-xl bg-cyan-600 text-white border-2 border-green-700 rounded-lg w-[8rem] p-2 hover:bg-white hover:text-green-500 mt-4 mb-4 mx-auto')
    setDisplayButton2('hidden')
  }


  return (
    <div className='mt-[4rem] w-full flex flex-col flex-wrap bg-gray-300 border-2  '>
      <div id='contact' className='mt-10 ml-[4rem]  h-12 px-6 py-1.5 mb-5 bg-white font-[Inter] text-3xl font-bold  rounded-3xl shadow-md max-[360px]:text-2xl w-fit' >
          Projects
        </div>

      {/* row-1 */}
      <div  className='w-[100%] flex flex-row flex-wrap'>

        <div id='1' className='flex flex-col items-center w-[27%] bg-white border-4 text-green-700 hover:bg-cyan-600 hover:text-white  my-4 mx-auto hover:border-4 hover:border-cyan-600 max-[912px]:w-[47%] max-[572px]:w-[85%]'>
          <img src='/project1.jpeg' className='h-[15rem] w-[100%]  ' />
          <p className='text-lg text-center leading-5 my-3 w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, eos suscipit. Voluptatibus aspernatur vero iste esse accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, est.
          </p>
          <a href='#' className='text-md text-gray-400 hover:text-black hover:underline'>Learn more</a>
        </div>

        <div id='2' className='flex flex-col items-center w-[27%] bg-white border-4 text-green-700 hover:bg-cyan-600 hover:text-white  my-4 mx-auto hover:border-4 hover:border-cyan-600  max-[912px]:w-[47%] max-[572px]:w-[85%]'>
          <img src='/project2.jpeg' className='h-[15rem] w-[100%] ' />
          <p className='text-lg text-center leading-5 my-3 w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, eos suscipit. Voluptatibus aspernatur vero iste esse accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, est.
          </p>
          <a href='#' className='text-md text-gray-400 hover:text-black hover:underline'>Learn more</a>
        </div>

        <div id='3' className='flex flex-col items-center w-[27%] bg-white border-4 text-green-700 hover:bg-cyan-600 hover:text-white  my-4 mx-auto hover:border-4 hover:border-cyan-600 max-[912px]:w-[47%] max-[572px]:w-[85%]'>
          <img src='/project3.png' className='h-[15rem] w-[100%]  ' />
          <p className='text-lg text-center leading-5 my-3 w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, eos suscipit. Voluptatibus aspernatur vero iste esse accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, est.
          </p>
          <a href='#' className='text-md text-gray-400 hover:text-black hover:underline'>Learn more</a>
        </div>

        <div id='4' className={display}>
          <img src='/project4.jpeg' className='h-[15rem] w-[100%]  ' />
          <p className='text-lg text-center leading-5 my-3 w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, eos suscipit. Voluptatibus aspernatur vero iste esse accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, est.
          </p>
          <a href='#' className='text-md text-gray-400 hover:text-black hover:underline'>Learn more</a>
        </div>

        <div id='5' className={display}>
          <img src='/project5.jpeg' className='h-[15rem] w-[100%] ' />
          <p className='text-lg text-center leading-5 my-3 w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, eos suscipit. Voluptatibus aspernatur vero iste esse accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, est.
          </p>
          <a href='#' className='text-md text-gray-400 hover:text-black hover:underline'>Learn more</a>
        </div>
      </div>

      <button className={displayButton} onClick={loadMore} >Load more</button>

     

      <button className={displayButton2} onClick={loadLess}>Load less</button>

    </div>
  )
}

export default Projects