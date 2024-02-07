"use client";
import React, { useState } from "react";
import "../../app/globals.css";
import Members from "../../components/models/members";
import ImageCarousel from "../../components/models/carousel";
import Events from "../../components/models/events";
import About from "../../components/models/about";
import Cards from "../../components/models/cards";
import WideImage from "../../components/models/wideImage";
import Hero from "../../components/models/hero";
import Herotag from "../../components/Hero/Hero";


const template = () => {
  const [openMembers, setOpenMembers] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);
  const [openCarousel, setOpenCarousel] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openCards, setOpenCards] = useState(false);
  const [openWideImage, setOpenWideImage] = useState(false);
  const [openHero, setOpenHero] = useState(false);

  const [hero, setHero] = useState("hidden");
  const [button, setButton] = useState(
    "text-xl text-blue-600 bg white p-3 px-4 hover:text-white hover:bg-blue-500 rounded-full border-2 border-blue-600 mt-[4rem] mb-[4rem] "
  );

  const handleChange = () => {
    setHero("w-[92.5%] mt-[4rem] cursor-pointer shadow-lg ");
    setButton("hidden");
  };

  return (
    <div className="bg-[#F3F3F3]">
      {openMembers && (
        <Members
          isOpen={openMembers}
          handleClose={() => setOpenMembers(false)}
        />
      )}
      {openEvents && (
        <Events isOpen={openEvents} handleClose={() => setOpenEvents(false)} />
      )}
      {openCarousel && (
        <ImageCarousel
          isOpen={openCarousel}
          handleClose={() => setOpenCarousel(false)}
        />
      )}
      {openAbout && (
        <About isOpen={openAbout} handleClose={() => setOpenAbout(false)} />
      )}
      {openCards && (
        <Cards isOpen={openCards} handleClose={() => setOpenCards(false)} />
      )}
      {openWideImage && (
        <WideImage
          isOpen={openWideImage}
          handleClose={() => setOpenWideImage(false)}
        />
      )}
      {openHero && (
        <Hero
          isOpen={openHero}
          handleClose={() => {
            setOpenHero(false);
            setHero("w-[92.5%] mt-[4rem] cursor-pointer shadow-lg");
          }}
        />
      )}

      <nav className="w-full grid grid-cols-6 ">
        <span className="col-span-5 pl-10 pt-6 text-4xl font-semibold">
          Choose a template
        </span>
        <button className="text-center text-3xl text-bold pt-6 pr-10 cursor-pointer text-[#585E7C]">
          Cancel
        </button>
      </nav>
      <div className="grid grid-cols-2 w-full selection:">
        <div className="flex flex-col items-end w-full pr-8">
          {/* Members */}
          <div
            className="w-[94%] bg-[#F6F6F6]  mt-[4rem] flex flex-col items-center shadow-lg  cursor-pointer pb-8"
            onClick={() => {
              setOpenMembers(true);
            }}
          >
            <h1 className="font-bold text-center text-2xl mt-[1rem]">
              Members
            </h1>
            <div className="mt-4 w-full flex flex-row flex-wrap items-center">
              <div className="flex flex-col items-center ml-4">
                <img
                  src="/template/members.png"
                  className="h-32 w-32 rounded-full "
                />
                <p className="font-bold text-[15px] text-center mt-0 ">
                  Name Surname
                </p>
                <p className="font-semibold text-[15px] text-center text-[#646464] ">
                  Co-head
                </p>
              </div>

              <div className="flex flex-col items-center ml-3">
                <img
                  src="/template/members.png"
                  className="h-32 w-32 rounded-full "
                />
                <p className="font-bold text-[15px] text-center mt-0 ">
                  Name Surname
                </p>
                <p className="font-semibold text-[15px] text-center text-[#646464] ">
                  Co-head
                </p>
              </div>

              <div className="flex flex-col items-center ml-3">
                <img
                  src="/template/members.png"
                  className="h-32 w-32 rounded-full "
                />
                <p className="font-bold text-[15px] text-center mt-0 ">
                  Name Surname
                </p>
                <p className="font-semibold text-[15px] text-center text-[#646464] ">
                  Co-head
                </p>
              </div>

              <div className="flex flex-col items-center ml-3">
                <img
                  src="/template/members.png"
                  className="h-32 w-32 rounded-full "
                />
                <p className="font-bold text-[15px] text-center mt-0 ">
                  Name Surname
                </p>
                <p className="font-semibold text-[15px] text-center text-[#646464] ">
                  Co-head
                </p>
              </div>

              <div className="flex flex-col items-center ml-3">
                <img
                  src="/template/members.png"
                  className="h-32 w-32 rounded-full "
                />
                <p className="font-bold text-[15px] text-center mt-0 ">
                  Name Surname
                </p>
                <p className="font-semibold text-[15px] text-center text-[#646464] ">
                  Co-head
                </p>
              </div>

              <div className="flex flex-col items-center ml-3">
                <img
                  src="/template/members.png"
                  className="h-32 w-32 rounded-full "
                />
                <p className="font-bold text-[15px] text-center mt-0 ">
                  Name Surname
                </p>
                <p className="font-semibold text-[15px] text-center text-[#646464] ">
                  Co-head
                </p>
              </div>
            </div>
            <button className="bg-white text-xl text-blue-600 p-2 px-8 rounded-3xl mt-4">
              View all <img src="/Icon.svg" className="inline h-6 w-6" />{" "}
            </button>
          </div>

          {/* Image Carousel  */}
          <div
            className="w-[94%] bg-[#F6F6F6] h-[30rem] mt-[4rem] flex flex-col items-center shadow-lg  cursor-pointer"
            onClick={() => {
              setOpenCarousel(true);
            }}
          >
            <h1 className="mt-5 text-2xl font-bold text-center">
              Image Carousel Title
            </h1>
            <div className="w-full flex flex-row justify-center mt-4 h-[75%]">
              <button className="p-5 bg-white  place-self-center rounded-full text-center mx-2">
                <img src="/carousel/Icon (1).svg" className="h-5 w-5 inline " />
              </button>
              <img
                src="/carousel/carousel-1.jpg"
                className="rounded-xl w-[82%] max-xl:w-[65%] "
              />
              <button className="p-5 bg-white  place-self-center rounded-full text-center mx-2">
                <img src="/carousel/Icon (2).svg" className="h-5 w-5 inline " />
              </button>
            </div>
            <div className="flex flex-row items-center mt-4 ">
              <span className="bg-black p-1.5 rounded-full mx-1"></span>
              <span className="bg-gray-400 p-1.5 rounded-full mx-1"></span>
              <span className="bg-gray-400 p-1.5 rounded-full mx-1"></span>
              <span className="bg-gray-400 p-1.5 rounded-full mx-1"></span>
              <span className="bg-gray-400 p-1.5 rounded-full mx-1"></span>
            </div>
          </div>

          {/* Image Cards  */}
          <div
            className="w-[94%] bg-[#F6F6F6] pb-4  mt-[4rem] flex flex-row flex-wrap items-center shadow-lg  cursor-pointer justify-center p-2"
            onClick={() => {
              setOpenCards(true);
            }}
          >
            {/* card-1  */}
            <div className="min-w-[16rem] w-[30%] border-4 rounded-2xl border-gray-200 flex flex-col items-start bg-[#FCFCFC] h-[25rem] mx-auto mt-2">
              <img
                src="/template/Imagecards.jpeg"
                className="w-full h-[50%] rounded-t-xl bg-cover"
              />
              <h3 className="text-xl font-semibold pl-2 text-left">
                Fiordland National Park
              </h3>
              <p className="text-sm  mt-2 mb-2 w-[90%] pl-2">
                Fiordland National Park is in the southwest of New Zealand’s
                South Island. It’s known for the glacier-carved fiords of
                Doubtful and Milford sounds
              </p>
              <hr className="w-full" />
              <button className="text-xl bg-white text-[#5267D0] font-semibold w-full text-center">
                Action
              </button>
            </div>
            {/* card-2  */}
            <div className="min-w-[16rem] w-[30%] border-4 rounded-2xl border-gray-200 flex flex-col items-start bg-[#FCFCFC] h-[25rem] mx-auto mt-2">
              <img
                src="/template/Imagecards.jpeg"
                className="w-full h-[50%] rounded-t-xl bg-cover"
              />
              <h3 className="text-xl font-semibold pl-2 text-left">
                Fiordland National Park
              </h3>
              <p className="text-sm  mt-2 mb-2 w-[90%] pl-2">
                Fiordland National Park is in the southwest of New Zealand’s
                South Island. It’s known for the glacier-carved fiords of
                Doubtful and Milford sounds
              </p>
              <hr className="w-full" />
              <button className="text-xl bg-white text-[#5267D0] font-semibold w-full text-center">
                Action
              </button>
            </div>
            {/* card-3  */}
            <div className="min-w-[16rem] w-[30%] border-4 rounded-2xl border-gray-200 flex flex-col items-start bg-[#FCFCFC] h-[25rem] mx-auto mt-2">
              <img
                src="/template/Imagecards.jpeg"
                className="w-full h-[50%] rounded-t-xl bg-cover"
              />
              <h3 className="text-xl font-semibold pl-2 text-left">
                Fiordland National Park
              </h3>
              <p className="text-sm  mt-2 mb-2 w-[90%] pl-2">
                Fiordland National Park is in the southwest of New Zealand’s
                South Island. It’s known for the glacier-carved fiords of
                Doubtful and Milford sounds
              </p>
              <hr className="w-full" />
              <button className="text-xl bg-white text-[#5267D0] font-semibold w-full text-center">
                Action
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full m">
          {/* Events  */}
          <div
            className="w-[92.5%] bg-[#F6F6F6] pb-16 mt-[4rem]  cursor-pointer shadow-lg "
            onClick={() => {
              setOpenEvents(true);
            }}
          >
            <h1 className="text-2xl font-bold text-center mt-4">Events</h1>
            <div className="w-[95%] mx-auto flex flex-row mt-8 max-[870px]:flex-col max-[870px]:items-center">
              <div className="flex flex-col items-start w-[50%] pl-6 max-[870px]:items-center max-[870px]:w-[70%]">
                <h2 className="text-2xl font-semibold">Event Name</h2>
                <p className="text-[15px] font-[400] mt-2 ">
                  type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularise.
                </p>
                <p className="text-[15px] font-[400] mt-2">Date: xx/xx/xx</p>
                <p className="text-[15px] font-[400] ">Time: xx/xx</p>
              </div>
              <div className="w-[50%] ml-16 ">
                <img
                  src="/EventImages/DemoImage.png"
                  className="h-[10rem] w-[80%] ml-10 max-[870px]:ml-0 max-[870px]:mt-2 "
                />
              </div>
            </div>
          </div>

          {/* About */}
          <div
            className="w-[92.5%] bg-[#F6F6F6] pb-12 mt-[4rem]  cursor-pointer shadow-lg flex flex-col items-start px-10"
            onClick={() => {
              setOpenAbout(true);
            }}
          >
            <h1 className="text-2xl font-bold mt-8">About</h1>
            <p className="mt-8 text-lg font-[400] leading-6">
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularise. type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was
              popularise.type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularise.type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularise.
            </p>
          </div>
          {/* Wide Image  */}
          <div
            className="w-[92.5%] h-[28rem] mt-[4rem]  cursor-pointer shadow-lg bg-[url('/template/wideImage.jpeg')] bg-cover flex flex-col items-center justify-center"
            onClick={() => {
              setOpenWideImage(true);
            }}
          >
            <h1 className="text-white text-center text-3xl font-bold">
              Fiordland National Park{" "}
            </h1>
            <p className="text-center text-sm font-[400] mt-4 w-[77%] text-white">
              Fiordland National Park is in the southwest of New Zealand’s South
              Island. It’s known for the glacier-carved fiords of Doubtful and
              Milford sounds
            </p>
          </div>
          {/* button  */}
          <div>
            <button className={button} onClick={handleChange}>
              See more <img src="/Icon.svg" className="inline h-6 w-6" />
            </button>
          </div>

          {/* Hero  */}
          <div
            className={hero}
            onClick={() => {
              setOpenHero(true);
              setHero("hidden");
            }}
          >
            <Herotag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default template;
