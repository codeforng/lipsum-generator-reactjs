import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-slate-100 pt-8 py-4">
      <div className="container mx-auto text-center">
        <h1 class="text-3xl font-bold">Lorem Ipsum Generator</h1>
        <p>Generate lorem faster than you think you can</p>
      </div>
      <button className="fixed top-3 right-2">
        <a
          href="#"
          target={"_blank"}
          className="bg-black text-white px-4 py-2 rounded-sm font-bold flex items-center justify-center gap-1"
        >
          <FaGithub />
          Fork on Github
        </a>
      </button>
    </header>
  );
};

export default Header;
