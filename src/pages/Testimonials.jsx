import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SideLabel from "../components/SideLabel";
import company1 from "../assets/Mask Group.png";
import company2 from "../assets/Mask Group (1).png";
import company3 from "../assets/Mask Group (2).png";
import company4 from "../assets/Mask Group (3).png";

const Testimonials = () => {
  return (
    <section className="relative min-h-screen w-full flex">
      <div className="flex w-full p-22">
        <div className="flex-[0.45] border-r border-white/10 p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-bold mb-3">+250</h2>
            <p className="text-gray-400 text-sm mb-6">
              I love my work and every project is my pride
            </p>
            <h1 className="text-6xl font-bold leading-tight">
              HAPPY <br /> CLIENTS
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 text-gray-400 mt-16">
            <img src={company1} alt="Company 1" />
            <img src={company2} alt="Company 2" />
            <img src={company3} alt="Company 3" />
            <img src={company4} alt="Company 4" />
          </div>
        </div>
        <div className="flex-[0.55] flex flex-col justify-center p-16">
          <h2 className="text-2xl mb-16">
            <span className="text-orange-500">Creative</span> & dedicated is
            things that my studio brings for your business
          </h2>
          <div className="text-orange-500 text-7xl mb-6">“</div>
          <p className="text-gray-400 mb-8">
            If you are seeking an interior designer that will understand
            exactly your needs, and someone who will utilise their creative
            and technical skills in parity with your taste, then Suzanne at
            The Bauhaus Studio is perfect.
          </p>
          <div className="font-semibold">DAVID & ELISA</div>
          <div className="text-gray-500 text-sm mb-12">
            Apartment view lake at Brooklyn
          </div>
          <div className="flex gap-4">
            <button className="border border-white/20 p-4 rounded-full">
              <ArrowLeft size={18} />
            </button>
            <button className="bg-orange-500 p-4 rounded-full">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <SideLabel text="TESTIMONIALS" />
    </section>
  );
};

export default Testimonials;