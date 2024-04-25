import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Main = () => {
  return (
    <div className="flex flex-col gap-6 pt-6 text-center">
      <div className="md:h-36 md:w-8/12 md:mx-auto">
        <h1 className="text-[#18181B] text-4xl font-extrabold lg:text-6xl ">
          Your Magic Wand for Instant Documentation
        </h1>
      </div>
      <h2 className="font-semibold text-black text-opacity-60 text-lg uppercase">
        Turn ANY process into a simple step-by step Guide
      </h2>
      <div className="bg-[#18181C] h-[38px] mx-auto px-4 py-2 text-white rounded-lg flex gap-1 items-center">
        <button className="font-bold">Install Wizardshot</button>
        <FaArrowRight />
      </div>
      <div className="h-auto bg-gradient-to-b from-[#AB96F8] to-[#FF99D0] p-6 md:p-2 rounded-3xl md:rounded-lg">
        <div className="relative h-[204.61px] md:h-[596px] border border-black border-opacity-50 rounded-md">
          <Image
            src="/image-91.png"
            alt="Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <h1 className="text-4xl text-[#18181B] font-extrabold">
        Say Goodbye To Writing Docs, and Hello To Wizardshot Doing it for YOU.
      </h1>
    </div>
  );
};

export default Main;
