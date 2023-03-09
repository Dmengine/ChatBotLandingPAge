import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

export const Hero = () => (
  <section id="home" className="flex md:flex-row flex-col  ">
    <div className={"flex-1 flex-col xl:px-0 sm:px-16 px-6 "}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className=" w-[32px] h-[32px] " />
        <p className={"ml-2 text-white"}>
          <span className="text-white font-bold ">20% </span>
          Discount for <span className="text-white font-bold">1 Month </span>
          Account
        </p>
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
          The next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
        Payment Method.
      </h1>
      <p className={" max-w-[457px] mt-5 text-gradient"}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
        annual percentage rates, annual fees.
      </p>
    </div>

    <div>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
    </div>
  </section>
);

export default Hero;
