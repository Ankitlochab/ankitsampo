import Link from "next/link";
import React from "react";

const Sidebar = ({item, setItem}) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center ">
        
        <div className="flex flex-col bg-black text-white gap-[45px] py-5 w-full items-center">
        <div className="flex justify-end absolute top-0 right-[20px]" onClick={()=>setItem(!item)}>
            <p className="text-white text-[50px] rotate-45">+</p>
        </div>
          <Link
            href=""
            className="hover:text-white duration-300 font-openn text-[16px] font-normal"
          >
            Home
          </Link>
          <Link
            href=""
            className="hover:text-white duration-300 font-openn text-[16px] font-normal"
          >
            About
          </Link>
          <Link
            href=""
            className="hover:text-white duration-300 font-openn text-[16px] font-normal"
          >
            Products
          </Link>
          <Link
            href=""
            className="hover:text-white duration-300 font-openn text-[16px] font-normal"
          >
            Pages
          </Link>
          <Link
            href=""
            className="hover:text-white duration-300 font-openn text-[16px] font-normal"
          >
            Contact
          </Link>
          <button
            type="submit"
            className="max-w-[131px] w-full h-[46px] rounded-[5px] border-[#1C2900] border-[3px] bg-[#1C2900] text-[16px] font-normal text-white hover:bg-[#90BC79] hover:text-black duration-500"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
