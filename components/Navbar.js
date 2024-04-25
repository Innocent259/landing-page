"use client";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between md:items-center">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 py-4">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <h1 className="text-[#1E293B] text-xl">Wizardshot</h1>
        </div>
        <div>
          <div className="md:hidden">
            {menu ? (
              <button className="text-xl" onClick={toggleMenu}>
                <MdClose />
              </button>
            ) : (
              <button className="text-xl" onClick={toggleMenu}>
                <MdOutlineMenu />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {menu && (
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-6 text-black text-base text-opacity-60">
              <li>Home</li>
              <li>Feature</li>
              <li>About</li>
              <li>Help Center & Community</li>
              <li>Login</li>
            </ul>
            <div className="flex flex-col gap-2 text-center">
              <span className="bg-[#18181C] h-[38px] mx-auto px-4 py-2 text-white rounded-lg flex gap-1 items-center">
                <Image
                  src="/icon _chrome.png"
                  alt="Chrome-icon"
                  width={20}
                  height={20}
                />
                <button className="font-bold">Install Wizardshot</button>
              </span>
              <h2
                className="text-base leading-[25.6px] italic"
              >
                100% free, forever 🤑
              </h2>
            </div>
          </div>
        )}
      </div>
      <ul className="hidden md:flex gap-3 text-black text-base text-opacity-60">
        <li>Home</li>
        <li>Feature</li>
        <li>About</li>
        <li>Help Center & Community</li>
      </ul>
      <div className="hidden md:flex gap-2 text-center">
        <button>Login</button>
        <span className="bg-[#18181C] h-[38px] mx-auto px-4 py-2 text-white rounded-lg flex gap-1 items-center">
          <Image
            src="/icon _chrome.png"
            alt="Chrome-icon"
            width={20}
            height={20}
          />
          <button className="font-bold">Install Wizardshot</button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
