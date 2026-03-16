import React from 'react';

const ContactLink = ({ label, value, hasArrow = false }) => (
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

const Contact = () => {
  return (
    <div className="min-h-screen bg-grain overflow-hidden flex flex-col font-sans">
      <div className="grow grid grid-cols-12">
        <aside className="col-span-4 border-r border-white/10 flex flex-col justify-between p-12">
          <div className="relative">
            <span className="absolute -left-8 top-0 text-[10px] opacity-40 rotate-180 [writing-mode:vertical-lr]">6.0</span>
            <h1 className="text-6xl font-bold text-white flex items-baseline leading-none">
              HIRE ME
            </h1>
            <p className="text-gray-400 text-sm mb-10">Enjoy coffee with me</p>
          </div>
          <div className="space-y-1 mt-20">
            <ContactLink label="MAIL" value="000.LUNCHBOX@GMAIL.COM" />
            <ContactLink label="SKYPE" value="MURREN8" />
            <ContactLink label="WWW" value="BEHANCE.NET/PAULGGGGG" hasArrow />
            <ContactLink label="TELEGRAM" value="PAUL_INC" />
          </div>
        </aside>
        <section className="col-span-8 p-24 bg-linear-to-tr from-transparent via-[#252525] to-transparent">
          <div className="max-w-xl">
            <h2 className="text-gray-400 text-[38px] leading-[1.1] mb-16 font-light">
              Let's grab a coffee and <br />
              jump on <span className="text-orange-500 underline decoration-1 underline-offset-12">conversation</span> chat <br />
              with me.
            </h2>
            <div className="flex ">
              <div className="mt-24 space-y-4">
                <p className="text-[10px] uppercase tracking-widest opacity-80">Send a brief</p>
                <p className="text-[10px] leading-relaxed opacity-40 max-w-70">
                  I recommend filling out a brief to assess the cost of the project. <a href="#" className="text-orange-500 underline ml-1">Brief</a>
                </p>
              </div>
              <form className="space-y-14">
                <div className="group relative">
                  <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#a54c3a] transition-all text-xs tracking-widest placeholder:text-[10px] placeholder:opacity-40" />
                </div>
                <div className="group relative">
                  <input type="email" placeholder="EMAIL *" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#a54c3a] transition-all text-xs tracking-widest placeholder:text-[10px] placeholder:opacity-40" />
                </div>
                <div className="group relative">
                  <textarea rows="1" placeholder="MESSAGE *" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#a54c3a] transition-all text-xs tracking-widest placeholder:text-[10px] placeholder:opacity-40 resize-none"></textarea>
                </div>
                <button className="h-14 w-28 bg-orange-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-lg">→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
