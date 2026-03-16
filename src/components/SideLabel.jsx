import React from "react";

const SideLabel = ({ text }) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 flex items-center justify-center border-r border-white/10 bg-[#1b1b1b]">
      
      <span className="-rotate-90 tracking-widest text-gray-400 text-[38px] whitespace-nowrap">
        {text}
      </span>

    </div>
  );
};

export default SideLabel;