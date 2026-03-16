import React from 'react';

const ContactLink = ({ label, value, hasArrow = false }) => {
  return (
    <div className="flex flex-col mb-8 group cursor-pointer">
      <span className="text-[10px] text-gray-500 tracking-widest mb-1 group-hover:text-orange-500 transition-all duration-300">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-white text-xs font-medium tracking-widest uppercase">
          {value}
        </span>
        {hasArrow && <span className="text-orange-500 text-xs">↗</span>}
      </div>
    </div>
  );
};

export default ContactLink;
