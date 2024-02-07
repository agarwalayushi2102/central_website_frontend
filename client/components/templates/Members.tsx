import React, {useState} from 'react'
import Members from '../models/members'

const members = () => {
    const [openMembers, setOpenMembers] = useState(false);
  return (
    <div>
         {openMembers && (
        <Members
          isOpen={openMembers}
          handleClose={() => setOpenMembers(false)}
        />
      )}
      <div
            className="w-[100%] bg-[#F6F6F6]  mt-[4rem] flex flex-col items-center shadow-lg  cursor-pointer pb-8 mr-6"
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
    </div>
  )
}

export default members
