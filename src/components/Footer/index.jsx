import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-8">
      <div className="container flex items-center justify-between py-4 mx-auto">
        <p className="text-sm">
          Made by{" "}
          <span className="font-bold">
            {" "}
            <a href="https://madflows.dev" target={"_blank"} rel="noreferrer">
              Folarin Lawal
            </a>{" "}
          </span>{" "}
          for{" "}
          <span className="underline decoration-wavy decoration-indigo-700">
            <a
              href="https://www.100daysofcode.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              #100DaysOfCode
            </a>
          </span>
        </p>

        <div className="flex gap-1 items-center justify-center">

        </div>
      </div>
    </footer>
  );
};

export default Footer;
