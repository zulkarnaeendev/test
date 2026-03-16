import React from 'react'
import { ArrowRight } from "lucide-react";
import SideLabel from "../components/SideLabel";

const Blog = () => {
  return (
    <section className="min-h-screen w-full flex">
      <div className="flex w-full p-22">
        <div className="w-130 border-r border-white/10 p-12 flex flex-col justify-between">
          <div>
            <h1 className="text-6xl font-bold leading-tight mb-6">
              LATEST <br /> NEWS
            </h1>
            <p className="text-gray-400 text-sm mb-10">
              I love my work and every project is my pride
            </p>
            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between border-b border-white/10 pb-3 hover:text-white cursor-pointer">
                <span>HOW TO DESIGN WELL?</span>
                <span>↗</span>
              </div>
              <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
                LEMON ILLUSTRATION DESIGN
              </div>
              <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
                PAUL THEME BRANDING
              </div>
              <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
                BEST TYPOGRAPHY 2020
              </div>
              <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
                MY NAME IS PATTISON
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-400">View all works</span>
            <button className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 p-16 flex flex-col justify-center">
          <div className="flex justify-between text-sm text-gray-400 mb-6">
            <span>5th January, 2020</span>
            <span className="text-2xl">(01)</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-lg">
            Berling ® — minimalism photography agency website, with the help
            of a minimalistic design, the site turned out to be very user-friendly
            and responsive.
          </p>
          <div className="w-full h-105 bg-gray-300" />
        </div>
      </div>
      <SideLabel text="FROM THE BLOG" />
    </section>
  );
};

export default Blog;