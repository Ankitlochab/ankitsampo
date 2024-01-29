import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
 

export default function Sliderrrr() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  "
      >
        
        <SwiperSlide>
          <div className="mt-[92px] max-sm:mt-[40px] max-w-[1140px] pb-[43px] w-full mx-auto">
            <h1 className="text-[#1C2900] font-Poppins max-sm:text-[28px] text-[40px] font-light text-center max-w-[600px] w-full mx-auto">
              <span className="text-white font-semibold">
                Our Customer Said
              </span>{" "}
              About Our Natural Shampoo
            </h1>
            <p className="text-white text-[16px] font-normal font-openn leading-[24px] max-w-[577px] mx-auto text-center w-full pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
            <Image
              src="/profile.png"
              height={120}
              width={120}
              className="mx-auto mt-[49px] max-w-[120px] w-full"
            />
            <p className="text-white text-[20px] font-light font-Poppins leading-[30px] max-w-[715px] w-full text-center mx-auto pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus,
              vitae porttitor purus nisl vitae purus. Praesent tristique odio ut
              rutrum pellentesque. Fusce eget molestie est, at rutrum est.
              Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat
              ut.
            </p>
            <h1 className="text-[#1C2900] text-center font-Poppins text-[20px] font-semibold pt-2">
              Client Name
            </h1>
            <p className="pt-[1px] text-center text-white italic text-[16px] font-light font-Poppins">
              Profession
            </p>

            {/* <Slider rrr /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[92px] max-sm:mt-[40px] max-w-[1140px] w-full mx-auto">
            <h1 className="text-[#1C2900] font-Poppins text-[40px] font-light text-center max-w-[600px] w-full mx-auto">
              <span className="text-white font-semibold">
                Our Customer Said
              </span>{" "}
              About Our Natural Shampoo
            </h1>
            <p className="text-white text-[16px] font-normal font-openn leading-[24px] max-w-[577px] mx-auto text-center w-full pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
            <Image
              src="/profile.png"
              height={120}
              width={120}
              className="mx-auto mt-[49px] max-w-[120px] w-full"
            />
            <p className="text-white text-[20px] font-light font-Poppins leading-[30px] max-w-[715px] w-full text-center mx-auto pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus,
              vitae porttitor purus nisl vitae purus. Praesent tristique odio ut
              rutrum pellentesque. Fusce eget molestie est, at rutrum est.
              Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat
              ut.
            </p>
            <h1 className="text-[#1C2900] text-center font-Poppins text-[20px] font-semibold pt-2">
              Client Name
            </h1>
            <p className="pt-[1px] text-center text-white italic text-[16px] font-light font-Poppins">
              Profession
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[92px] max-sm:mt-[40px] max-w-[1140px] w-full mx-auto">
            <h1 className="text-[#1C2900] font-Poppins text-[40px] font-light text-center max-w-[600px] w-full mx-auto">
              <span className="text-white font-semibold">
                Our Customer Said
              </span>{" "}
              About Our Natural Shampoo
            </h1>
            <p className="text-white text-[16px] font-normal font-openn leading-[24px] max-w-[577px] mx-auto text-center w-full pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
            <Image
              src="/profile.png"
              height={120}
              width={120}
              className="mx-auto mt-[49px] max-w-[120px] w-full"
            />
            <p className="text-white text-[20px] font-light font-Poppins leading-[30px] max-w-[715px] w-full text-center mx-auto pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus,
              vitae porttitor purus nisl vitae purus. Praesent tristique odio ut
              rutrum pellentesque. Fusce eget molestie est, at rutrum est.
              Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat
              ut.
            </p>
            <h1 className="text-[#1C2900] text-center font-Poppins text-[20px] font-semibold pt-2">
              Client Name
            </h1>
            <p className="pt-[1px] text-center text-white italic text-[16px] font-light font-Poppins">
              Profession
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[92px] max-sm:mt-[40px] max-w-[1140px] w-full mx-auto">
            <h1 className="text-[#1C2900] font-Poppins text-[40px] font-light text-center max-w-[600px] w-full mx-auto">
              <span className="text-white font-semibold">
                Our Customer Said
              </span>{" "}
              About Our Natural Shampoo
            </h1>
            <p className="text-white text-[16px] font-normal font-openn leading-[24px] max-w-[577px] mx-auto text-center w-full pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
            <Image
              src="/profile.png"
              height={120}
              width={120}
              className="mx-auto mt-[49px] max-w-[120px] w-full"
            />
            <p className="text-white text-[20px] font-light font-Poppins leading-[30px] max-w-[715px] w-full text-center mx-auto pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus,
              vitae porttitor purus nisl vitae purus. Praesent tristique odio ut
              rutrum pellentesque. Fusce eget molestie est, at rutrum est.
              Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat
              ut.
            </p>
            <h1 className="text-[#1C2900] text-center font-Poppins text-[20px] font-semibold pt-2">
              Client Name
            </h1>
            <p className="pt-[1px] text-center text-white italic text-[16px] font-light font-Poppins">
              Profession
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
