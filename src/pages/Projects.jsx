import React from "react";
import { ArrowRight } from "lucide-react";
import SideLabel from "../components/SideLabel";

const Projects = () => {
  return (
    <section className="relative grid grid-cols-[720px_1fr] min-h-screen">
      <div className="border-r border-white/10 p-22">
        <h1 className="text-5xl font-bold mb-10">PROJECTS</h1>
        <div className="space-y-4 text-gray-400">
          <div className="flex justify-between border-b border-white/10 pb-3 hover:text-white cursor-pointer">
            <span>BERLING AGENCY WEBSITE</span>
            <span>↗</span>
          </div>
          <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
            PRETTYLITTLETHING AMERICAN SHOP
          </div>
          <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
            BENHOME - ARCHITECTURE THEME
          </div>
          <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
            GILHOUSE - ARCHITECTURE WEBSITE
          </div>
          <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
            GILBER - PERSONAL WEBSITE
          </div>
          <div className="border-b border-white/10 pb-3 hover:text-white cursor-pointer">
            JONNY - PERSONAL WEBSITE
          </div>
        </div>
        <div className="mt-16 flex items-center gap-6">
          <span className="text-sm text-gray-400">View all works</span>
          <button className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center p-12">
        <div className="w-full h-150 bg-gray-300 rounded-sm flex items-center justify-center">
        </div>
      </div>
      <SideLabel text="PORTFOLIO" />
    </section>
  );
};

export default Projects;