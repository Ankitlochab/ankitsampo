import React from "react";
import {
  AntihairIcon,
  HomeIcon,
  HypoIcon,
  NaturalIcon,
  RightIcon,
} from "./Icon";
import Image from "next/image";
import Sliderrrr from "./Sliderrrr";
import Link from "next/link";
import As from "../video";

const Section1 = () => {
  return (
    <>
      <div>
        <div className="max-w-[1140px] w-full over mx-auto px-3 max-sm:mt-[40px] mt-[96px]">
          <div className="overflow-auto">
            <div className="flex gap-6 w-[1140px]">
              <div className="w-[356px] h-[230px] p-4 bg-[#90BC79]">
                <div className="border-[3px] border-[rgba(255,255,255,0.20)] max-w-[324px] w-full h-[198px] items-center justify-center flex flex-col">
                  <NaturalIcon />
                  <h1 className="pt-6 font-Poppins text-[20px] font-semibold text-center">
                    100% Natural
                  </h1>
                </div>
              </div>
              <div className="w-[356px] h-[230px] p-4 bg-[#90BC79]">
                <div className="border-[3px] border-[rgba(255,255,255,0.20)] max-w-[324px] w-full h-[198px] items-center justify-center flex flex-col">
                  <AntihairIcon />
                  <h1 className="pt-6 font-Poppins text-[20px] font-semibold text-center">
                    Anti Hair Fall
                  </h1>
                </div>
              </div>
              <div className="w-[356px] h-[230px] p-4 bg-[#90BC79]">
                <div className="border-[3px] border-[rgba(255,255,255,0.20)] max-w-[324px] w-full h-[198px] items-center justify-center flex flex-col">
                  <HypoIcon />
                  <h1 className="pt-6 font-Poppins text-[20px] font-semibold text-center">
                    Hypoallergenic
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-[92px] items-center flex max-md:flex-col gap-4"
            id="health"
          >
            <div className=" md:invisible">
              <Image src="/sampo2.png" height={541} width={541} />
            </div>
            <div className="max-w-[542px] w-full">
              <h1 className="text-[#1C2900] font-Poppins text-[41px] max-md:text-[34px] max-sm:text-[26px] max-sm:leading-[30px] font-light leading-[48px]">
                <span className="font-semibold text-[#90BC79]">
                  Healthy Hair
                </span>{" "}
                Is A Symbol Of Our Beauty
              </h1>
              <p className="pt-5 max-sm:pt-3 text-[#656565] font-openn text-[16px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquet, erat non malesuada consequat, nibh erat tempus risus,
                vitae porttitor purus nisl vitae purus. Praesent tristique odio
                ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.
              </p>
              <p className="pt-6 max-sm:pt-3 text-[#656565] font-openn text-[16px] font-medium">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor.
              </p>
              <button
                type="submit"
                className="max-w-[131px] w-full rounded-[5px] bg-[#90BC79] border-[3px] h-[46px] mt-[25px] max-sm:mt-3 border-[#90BC79] text-white font-openn text-[16px] font-normal hover:bg-[#1C2900] duration-300"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[url(/bg.png)] bg-no-repeat bg-center bg-cover" id="deals">
          <div className="mt-[92px] max-sm:mt-[40px] py-[93px] max-sm:py-[40px] flex max-md:flex-col justify-between items-center gap-6 px-4 max-w-[1140px] w-full mx-auto">
            <div className="md:invisible">
              <Image src="/sampo3.png" width={541} height={541} />
            </div>
            <div className="max-w-[534px] w-full bg-white p-6 max-sm:p-3">
              <div className=" max-w-[486px] w-full border-[#F4F8F1] border-[3px]">
                <p className="text-[#656565] text-center font-openn text-[16px] font-normal pt-6">
                  Natural & Organic Shampoo
                </p>
                <h1 className="text-[#1C2900] text-center text-[32px] font-bold pt-1">
                  Deals of the Day
                </h1>
                <h1 className="pt-4 text-[56px] text-[#90BC79] font-Poppins font-bold text-center">
                  $99.99
                </h1>
                <h1 className="pt-[18px] text-[#1C2900] text-[20px] font-Poppins font-semibold text-center">
                  Fresh Organic Shampoo
                </h1>
                <p className="text-[#656565] text-center font-openn text-[16px] font-normal leading-[24px] pt-[9px] px-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  feugiat rutrum lectus sed auctor.
                </p>
                <div className="flex mt-[21px] justify-between px-[55px] max-sm:px-0">
                  <div>
                    <h1 className="text-[#1C2900] font-Poppins font-bold text-[40px]">
                      58
                    </h1>
                    <p className="text-[#1C2900] text-[16px] italic capitalize">
                      -Days-
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[#1C2900] font-Poppins font-bold text-[40px]">
                      05
                    </h1>
                    <p className="text-[#1C2900] text-[16px] italic capitalize">
                      -Hours-
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[#1C2900] font-Poppins font-bold text-[40px]">
                      58
                    </h1>
                    <p className="text-[#1C2900] text-[16px] italic capitalize">
                      -Mins-
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[#1C2900] font-Poppins font-bold text-[40px]">
                      48
                    </h1>
                    <p className="text-[#1C2900] text-[16px] italic capitalize">
                      -Secs-
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="max-w-[131px] w-full rounded-[5px] bg-[#90BC79] border-[3px] h-[46px] mt-[30px] mb-[27px] flex mx-auto items-center justify-center border-[#90BC79] text-white font-openn text-[16px] font-normal hover:bg-[#1C2900] duration-300"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[92px] max-sm:mt-[40px] px-[10px] max-w-[1140px] w-full mx-auto" id="best">
          <h1 className="text-[#1C2900] text-center mx-auto font-Poppins text-[40px] max-sm:text-[26px] max-sm:leading-[35px] font-light leading-[48px] max-w-[600px] w-full">
            Best Benefits Of Our{" "}
            <span className="text-[#90BC79] font-semibold">
              Natural Hair Shampoo
            </span>
          </h1>
          <p className="text-[#656565] text-center font-openn text-[16px] font-normal leading-[24px] pt-3 max-w-[577px] w-full mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet, erat non malesuada consequat, nibh erat tempus risus.
          </p>
          <div className="mt-[49px] max-sm:mt-2 flex  max-sm:flex-col items-center justify-between gap-6">
            <div>
              <div className="flex gap-4 mt-[45px] items-center ">
                <div className="h-[80px] w-[80px] rounded-full border-[3px] border-[##F4F8F1] flex items-center justify-center">
                  <RightIcon />
                </div>
                <div className="max-w-[210px] w-full">
                  <h1 className="text-[20px] text-[#1C2900] font-semibold font-Poppins">
                    Natural & Organic
                  </h1>
                  <p className="text-[#656565] font-openn text-[16px] font-normal leading-[24px] pt-4">
                    Lorem ipsum dolor sit amet adipiscing elit aliquet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-[45px] items-center">
                <div className="h-[80px] w-[80px] rounded-full border-[3px] border-[##F4F8F1] flex items-center justify-center">
                  <RightIcon />
                </div>
                <div className="max-w-[210px] w-full">
                  <h1 className="text-[20px] text-[#1C2900] font-semibold font-Poppins">
                    Anti Hair Fall
                  </h1>
                  <p className="text-[#656565] font-openn text-[16px] font-normal leading-[24px] pt-4">
                    Lorem ipsum dolor sit amet adipiscing elit aliquet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-[45px] items-center">
                <div className="h-[80px] w-[80px] rounded-full border-[3px] border-[##F4F8F1] flex items-center justify-center">
                  <RightIcon />
                </div>
                <div className="max-w-[210px] w-full">
                  <h1 className="text-[20px] text-[#1C2900] font-semibold font-Poppins">
                    Anti-dandruff
                  </h1>
                  <p className="text-[#656565] font-openn text-[16px] font-normal leading-[24px] pt-4">
                    Lorem ipsum dolor sit amet adipiscing elit aliquet.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden">
              <Image src="/twosampo.png" width={361} height={361} />
            </div>
            <div>
              <div className="flex gap-4 mt-[45px] items-center">
                <div className="h-[80px] w-[80px] rounded-full border-[3px] border-[##F4F8F1] flex items-center justify-center">
                  <RightIcon />
                </div>
                <div className="max-w-[229px] w-full">
                  <h1 className="text-[20px] text-[#1C2900] font-semibold font-Poppins">
                    No Internal Side Effect
                  </h1>
                  <p className="text-[#656565] font-openn text-[16px] font-normal leading-[24px] pt-4">
                    Lorem ipsum dolor sit amet adipiscing elit aliquet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-[45px] items-center">
                <div className="h-[80px] w-[80px] rounded-full border-[3px] border-[##F4F8F1] flex items-center justify-center">
                  <RightIcon />
                </div>
                <div className="max-w-[210px] w-full">
                  <h1 className="text-[20px] text-[#1C2900] font-semibold font-Poppins">
                    No Skin Irritation
                  </h1>
                  <p className="text-[#656565] font-openn text-[16px] font-normal leading-[24px] pt-4">
                    Lorem ipsum dolor sit amet adipiscing elit aliquet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-[45px] items-center">
                <div className="h-[80px] w-[80px] rounded-full border-[3px] border-[##F4F8F1] flex items-center justify-center">
                  <RightIcon />
                </div>
                <div className="max-w-[210px] w-full">
                  <h1 className="text-[20px] text-[#1C2900] font-semibold font-Poppins">
                    No Artificial Smell
                  </h1>
                  <p className="text-[#656565] font-openn text-[16px] font-normal leading-[24px] pt-4">
                    Lorem ipsum dolor sit amet adipiscing elit aliquet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[url(/bg.png)] bg-no-repeat bg-center bg-cover px-[10px]" id="how">
          <div className="max-w-[1140px] w-full mx-auto mt-[92px] py-[92px] max-md:py-[30px]">
            <h1 className="text-[#1C2900] text-center text-[40px] max-sm:text-[24px] font-Poppins font-light max-w-[500px] w-full mx-auto">
              How To Use Our{" "}
              <span className="text-white font-semibold">
                Natural & Organic
              </span>{" "}
              Organic{" "}
            </h1>
            <p className="max-w-[577px] w-full text-white font-openn text-[16px] font-normal mx-auto text-center pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
            <div className="mt-[49px] flex justify-center items-center gap-[84px] max-lg:gap-[40px] max-md:flex-col mx-auto">
              <div className="max-w-[303px] w-full ">
                <div className="border-[3px] flex items-center justify-center h-[120px] w-[120px] rounded-full border-[rgba(255,255,255,0.20)] mx-auto">
                  <HomeIcon />
                </div>
                <h1 className="text-white font-Poppins font-normal text-[20px] text-center pt-6">
                  Wash Hair With Water
                </h1>
                <div className="bg-[#F4F8F1] max-w-[85px] w-full h-[3px] mx-auto mt-3"></div>
                <p className="text-center font-openn text-[16px] pt-2 text-white font-normal leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
              </div>
              <div className="max-w-[303px] w-full ">
                <div className="border-[3px] flex items-center justify-center h-[120px] w-[120px] rounded-full border-[rgba(255,255,255,0.20)] mx-auto">
                  <HomeIcon />
                </div>
                <h1 className="text-white font-Poppins font-normal text-[20px] text-center pt-6">
                  Apply Shampoo On Hair
                </h1>
                <div className="bg-[#F4F8F1] max-w-[85px] w-full h-[3px] mx-auto mt-3"></div>
                <p className="text-center font-openn text-[16px] pt-2 text-white font-normal leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
              </div>
              <div className="max-w-[303px] w-full ">
                <div className="border-[3px] flex items-center justify-center h-[120px] w-[120px] rounded-full border-[rgba(255,255,255,0.20)] mx-auto">
                  <HomeIcon />
                </div>
                <h1 className="text-white font-Poppins font-normal text-[20px] text-center pt-6">
                  Wait 5 Mins And Wash
                </h1>
                <div className="bg-[#F4F8F1] max-w-[85px] w-full h-[3px] mx-auto mt-3"></div>
                <p className="text-center font-openn text-[16px] pt-2 text-white font-normal leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aliquet, erat non malesuada consequat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[92px] max-sm:mt-[40px] max-w-[1140px] w-full mx-auto">
          <h1 className="text-center text-[#1C2900] font-Poppins text-[40px] font-light">
            Our Natural{" "}
            <span className="text-[#90BC79] font-semibold">Hair Products</span>
          </h1>
          <p className="max-w-[577px] w-full text-center pt-[17px] mx-auto font-normal text-[16px] font-openn text-[#656565] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet, erat non malesuada consequat, nibh erat tempus risus.
          </p>
        </div>
        <div className="overflow-auto" id="our">
          <div className="flex gap-6 mt-[49px] w-[1120px] mx-auto">
            <div className="max-w-[261px] w-full border-[3px] border-[#F4F8F1]">
              <Image
                src="/product1.png"
                height={300}
                width={116}
                className="mx-auto pt-[26px]"
              />
              <div className="flex items-center mt-[30px] mx-auto justify-center">
                <Image src="/star.png" height={14} width={95} />
                <p className="text-[#656565] font-openn text-[14px] font-normal">
                  (99)
                </p>
              </div>
              <h1 className="text-[#1C2900] pt-3 text-center font-Poppins text-[16px] font-semibold">
                Hair Shining Shampoo
              </h1>
              <p className="text-center text-[#90BC79] font-Poppins pt-[6px] text-[20px] font-normal">
                $99.99
              </p>
              <Link href="">
                <button
                  type="submit"
                  className="max-w-[126px] hover:bg-black duration-300 hover:text-white w-full h-[42px] mt-4 mx-auto rounded-[5px]  border-[3px] border-[#90BC79] text-[#90BC79] font-openn font-normal text-[16px] mb-[37px] flex text-center justify-center items-center"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
            <div className="max-w-[261px] w-full border-[3px]  border-[#F4F8F1]">
              <Image
                src="/product1.png"
                height={300}
                width={116}
                className="mx-auto pt-[26px] md:invisible"
              />
              <div className="flex items-center mt-[30px] mx-auto justify-center">
                <Image src="/star.png" height={14} width={95} />
                <p className="text-[#656565] font-openn text-[14px] font-normal">
                  (99)
                </p>
              </div>
              <h1 className="text-[#1C2900] pt-3 text-center font-Poppins text-[16px] font-semibold">
                Anti-dandruff Shampoo
              </h1>
              <p className="text-center text-[#90BC79] font-Poppins pt-[6px] text-[20px] font-normal">
                $99.99
              </p>
              <Link href="">
                <button
                  type="submit"
                  className="max-w-[126px] hover:bg-black duration-300 hover:text-white w-full h-[42px] mt-4 mx-auto rounded-[5px]  border-[3px] border-[#90BC79] text-[#90BC79] font-openn font-normal text-[16px] mb-[37px] flex text-center justify-center items-center"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
            <div className="max-w-[261px] w-full border-[3px] border-[#F4F8F1]">
              <Image
                src="/product1.png"
                height={300}
                width={116}
                className="mx-auto pt-[26px]"
              />
              <div className="flex items-center mt-[30px] mx-auto justify-center">
                <Image src="/star.png" height={14} width={95} />
                <p className="text-[#656565] font-openn text-[14px] font-normal">
                  (99)
                </p>
              </div>
              <h1 className="text-[#1C2900] pt-3 text-center font-Poppins text-[16px] font-semibold">
                Anti Hair Fall Shampoo
              </h1>
              <p className="text-center text-[#90BC79] font-Poppins pt-[6px] text-[20px] font-normal">
                $99.99
              </p>
              <Link href="">
                <button
                  type="submit"
                  className="max-w-[126px] hover:bg-black duration-300 hover:text-white w-full h-[42px] mt-4 mx-auto rounded-[5px]  border-[3px] border-[#90BC79] text-[#90BC79] font-openn font-normal text-[16px] mb-[37px] flex text-center justify-center items-center"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
            <div className="max-w-[261px] w-full border-[3px] border-[#F4F8F1]">
              <Image
                src="/product1.png"
                height={300}
                width={116}
                className="mx-auto pt-[26px]"
              />
              <div className="flex items-center mt-[30px] mx-auto justify-center">
                <Image src="/star.png" height={14} width={95} />
                <p className="text-[#656565] font-openn text-[14px] font-normal">
                  (99)
                </p>
              </div>
              <h1 className="text-[#1C2900] pt-3 text-center font-Poppins text-[16px] font-semibold">
                Hair Growing Shampoo
              </h1>
              <p className="text-center text-[#90BC79] font-Poppins pt-[6px] text-[20px] font-normal">
                $99.99
              </p>
              <Link href="">
                <button
                  type="submit"
                  className="max-w-[126px] hover:bg-black duration-300 hover:text-white w-full h-[42px] mt-4 mx-auto rounded-[5px]  border-[3px] border-[#90BC79] text-[#90BC79] font-openn font-normal text-[16px] mb-[37px] flex text-center justify-center items-center"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="background-video-container ">
          <As/>
          <div className="mt-[92px] max-sm:mt-[40px] max-w-[1140px] w-full mx-auto">
            <Sliderrrr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
