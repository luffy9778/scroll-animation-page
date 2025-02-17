import React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const Home = () => {
  return (
    <>
      <div className="h-[200vh] bg-[#331707]">
        <Section1 />
        <Section2 />
      </div>
      <div className="h-[100vh] bg-[#CDB9AB]">
        <Section3 />
      </div>
    </>
  );
};

export default Home;
