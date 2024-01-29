import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const Navbar = () => {
  const [item, setItem] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl1 = gsap.timeline({
       scrollTrigger: {
        trigger: "#sampoo",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
        // markers: true,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#health",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
        // markers: true,
      },
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#deals",
        start: "30% top",
        end: "bottom bottom",
        scrub: 5,
        // markers: true,
      },
    });
     const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#how",
        start: "-70% top",
        end: "bottom bottom",
        scrub: 5,
        // markers: true,
      },
    });

    tl1.to(containerRef.current, {
      x: -700,
      y: 1000,
      duration: 1,
    });
    tl2.to(containerRef.current, {
      x: -600,
      y: 1800,
      duration: 1,
      scale:1,
    });
     tl3.to(containerRef.current, {
      x: -300,
      y: 2700,
      scale:0.7,
      duration: 1,

    });
     tl4.to(containerRef.current, {
      x: -440,
      y: 4100,
      scale:0.5,
      duration: 1,

    });

    const master = gsap.timeline();
    master.add(tl1).add(tl2).add(tl3).add(tl4);

    return () => {
      master.kill();
    };
  }, []);

  return (
    <>
      <div className="bg-[url(/bg.png)] bg-[#90BC79] bg-center bg-cover bg-no-repeat ">
       
        <div className="max-w-[1140px] px-5 w-full mx-auto">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-[32px] font-semibold font-openn text-white">
                Hairnic
              </h1>
            </div>
            <div className="lg:hidden" onClick={() => setItem(!item)}>
              <Image src="/menu.svg" width={50} height={50} />
            </div>
            <div className="flex gap-[45px] max-w-[700px] w-full max-lg:hidden items-center">
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
          <div
            className={`absolute w-full duration-500 ${
              item ? "left-0 top-0" : "left-[-105%] top-0"
            }`}
          >
            <Sidebar item={item} setItem={setItem} />
          </div>

          <div className="mt-[120px] max-sm:mt-[40px] max-sm:pb-6 pb-[95px] flex items-center max-md:flex-col justify-center">
            <div className="max-w-[582px] max-md:max-w-[800px] w-full">
              <h1 className="text-white text-[39px] font-Poppins font-light max-sm:text-[28px]">
                Natural & Organic
              </h1>
              <h1 className="text-white leading-[67px] max-md:text-[46px] max-sm:text-[34px] max-sm:leading-[50px] text-[56px] font-Poppins font-bold">
                Hair{" "}
                <span className="text-[#1C2900] font-Poppins font-light">
                  Shampoo
                </span>{" "}
                For Healthy Hair
              </h1>
              <p className="text-white max-w-[514px] w-full font-openn text-[16px] font-normal leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius
                natoque penatibus et magnis dis parturient montes.
              </p>
              <div className="flex gap-5 mt-[25px]">
                <button
                  type="submit"
                  className="max-w-[131px] w-full h-[46px] rounded-[5px] border-[#1C2900] border-[3px] bg-[#1C2900] text-[16px] font-normal text-white hover:bg-[#90BC79] hover:text-black duration-500"
                >
                  Shop Now
                </button>
                <button
                  type="submit"
                  className="max-w-[131px] w-full h-[46px] rounded-[5px] border-[#1C2900] border-[3px] bg-[#90BC79] text-[16px] font-normal text-black hover:bg-[#1C2900] hover:text-white duration-500"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="">
              <Image
                ref={containerRef}
                id="sampoo"
                src="/sampo.png"
                width={541}
                height={541}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
