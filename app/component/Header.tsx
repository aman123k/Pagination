import React from "react";
import { LuXSquare } from "react-icons/lu";
import { TbHelpSquareRounded } from "react-icons/tb";

function Header() {
  return (
    <section className=" flex items-center  justify-center relative text-center">
      <header className=" text-[#1B1B1B] font-sans font-semibold text-2xl pb-8">
        <h1>Recently Generated Reports</h1>
      </header>
      <div className="absolute flex items-center gap-4 right-16 text-[#7C7C7C]">
        <LuXSquare className="  text-3xl" />
        <TbHelpSquareRounded className="  text-3xl" />
      </div>
    </section>
  );
}

export default Header;
