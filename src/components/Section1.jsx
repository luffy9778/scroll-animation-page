import React from "react";
import LogoSqure from "./LogoSqure";

const Section1 = () => {
  return (
    <div className="h-screen w-full justify-center items-center relative ">
      {/* logo section */}

      <div className="flex justify-center items-center h-full sticky top-[35%] left-[45%]">
        <LogoSqure position={"absolute left-[26%] md:left-[45.5%]"} />
        <LogoSqure
          position={
            "absolute left-[31.5%] top-[38.5%] md:left-[46.8%] md:top-[40%] rotate-[42.64deg]"
          }
        />
        <LogoSqure position={"absolute left-[45%] top-[35%] md:left-[50%] md:top-[37.2%]"} />
        <LogoSqure
          position={
            "absolute left-[58.5%] top-[38.5%] md:left-[53.2%] md:top-[40%] rotate-[42.64deg]"
          }
        />
        <LogoSqure position={"absolute left-[64%] md:left-[54.6%]"} />
        <LogoSqure position={"absolute left-[45%] md:left-[50%]"} />
      </div>

      <div className="absolute top-[55%] text-center md:px-64">
        <h1 className="font-serif text-xl md:text-[61px] text-[#FFE9D9] leading-none">
          The First Media Company crafted For the Digital First generation
        </h1>
      </div>
    </div>
  );
};

export default Section1;
