import { ReactElement } from "react";
import { logo } from "./icons";

/** Heading for the CV */
export default function Heading(): ReactElement {
  return (
    <div className="w-full md:absolute print:absolute">
      {/* NOTE this is the slanted purple background when tilted */}
      <div className="absolute w-[200vmax] h-[200vmax] origin-bottom-left -translate-y-full rotate-12 md:bg-violet-200 print:bg-violet-200" />
      <div className="font-title p-6 flex flex-col items-end relative bg-violet-200 md:bg-transparent print:bg-transparent">
        <div className="flex space-x-4">
          <div className="shrink-0">
            <img className="h-9" src={logo.src} alt="logo" />
          </div>
          <h1 className="text-5xl font-bold text-right">Erik Brinkman</h1>
        </div>
        <div className="hover:text-white hover:underline">
          <a href="mailto:erik.brinkman@gmail.com">erik.brinkman@gmail.com</a>
        </div>
        <div className="hover:text-white hover:underline">
          <a
            href="https://erikbrinkman.github.io"
            target="_blank"
            rel="noreferrer"
          >
            erikbrinkman.github.io
          </a>
        </div>
      </div>
    </div>
  );
}
