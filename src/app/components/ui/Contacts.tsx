import React from 'react'

const Contacts = () => {
  return (
    <div className="bg-[#171717] text-white flex flex-col w-full p-10 xl:p-24">
      <div className="p-10 text-2xl lg:text-5xl font-bold">CONTACTS</div>
      <div className="flex h-44 p-2 my-20 xl:my-36">
        <div className="bg-yellow-400 w-1 h-[90%]"></div>
        <div className="flex flex-col items-start justify-center p-10 gap-4 ">
          <p>Location: 5xx Ixxx Street, Cambridge MA, 02138</p>
          
          <p>Contact Owner: 1(617)xxx-xxxx</p>
          <p className=" cursor-pointer">Email: Cambridgeivyinn@xxxx.com</p>
        </div>
      </div>
      <div className="border-white  w-[50%] sm:w-[25%] h-11 m-auto border-2 flex items-center justify-center rounded-full ">
        Contact Us
      </div>
    </div>
  );
}

export default Contacts