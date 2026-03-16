import React from "react";
import { ArrowRight } from "lucide-react";
import SideLabel from "../components/SideLabel";

const Home = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-2 px-10 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="flex flex-col justify-center relative z-10">
        <p className="text-gray-400 mb-6">
          Always available for freelance work
        </p>
        <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
          GET <br />
          YOUR <br />
          <span className="text-gray-300">GREAT DESIGN</span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-md">
          Hello, my name is Paterson and I am UX/UI designer and
          front-end developer working with web for 9 years.
        </p>
        <button className=" mt-10 h-14 w-38 bg-orange-500 rounded-full flex items-center gap-10 justify-center hover:scale-105 transition-transform duration-300">
          Hire Me
          <span className="text-white text-lg">→</span>
        </button>
        <div className="flex gap-14 mt-20 text-gray-300">
          <div>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm text-gray-500">Years experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-gray-500">Themeforest awards</p>
          </div>
          <div>
            <p className="text-3xl font-bold">60</p>
            <p className="text-sm text-gray-500">Projects done</p>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div
          className="absolute rounded-full bg-gray-200"
          style={{
            width: "600px",
            height: "600px",
            left: "50px",
          }}
        />
        <div
          className="absolute rounded-full bg-black/80 flex items-center justify-center"
          style={{
            width: "600px",
            height: "600px",
            left: "300px",
          }}
        >
          <p className="text-gray-300 text-sm border-b border-gray-400">
            Fill out the brief to find out the cost
          </p>
        </div>
      </div>
      <SideLabel text="MY NAME IS ROBERT" />
    </section>
  );
};

export default Home;