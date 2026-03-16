import React from "react";
import SideLabel from "../components/SideLabel";

const Awards = () => {
  return (
    <section className="relative grid grid-cols-[620px_1fr] min-h-screen pl-28">
      <div className="border-r border-white/10 p-12 flex flex-col justify-center">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          EXPLORE <br /> MY <br /> PROFILE
        </h1>
        <p className="text-gray-400 max-w-sm mb-10">
          Hello, my name is Pavel Subba and I am UX/UI designer and
          front-end developer working via developer 9 years.
        </p>
        <button className="h-14 w-28 bg-orange-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
          <span className="text-white text-lg">→</span>
        </button>
      </div>
      <div className="p-16">
        <h2 className="text-2xl mb-10">
          Professional <span className="text-orange-500">awards</span>
        </h2>
        <div className="space-y-12">
          <div className="grid grid-cols-[80px_1fr_1fr] items-center border-b border-white/10 pb-8">
            <div className="w-12 h-12 bg-gray-300" />
            <div className="font-semibold">
              1ST WINNER CREATIVE DESIGN CHAMPIONSHIP
            </div>
            <div className="text-gray-400 text-sm">
              For most favorited design voted by NY City Style customers
            </div>
          </div>
          <div className="grid grid-cols-[80px_1fr_1fr] items-center border-b border-white/10 pb-8">
            <div className="w-12 h-12 bg-gray-300" />
            <div className="font-semibold">
              BEST 5 BRANDING PROJECT OF NOMINATIONS
            </div>
            <div className="text-gray-400 text-sm">
              For best creative & usable health care mobile app design
            </div>
          </div>
        </div>
      </div>
      <SideLabel text="MY AWARDS" />
    </section>
  );
};

export default Awards;