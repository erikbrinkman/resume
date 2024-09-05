import { ReactElement } from "react";
import { logo } from "./icons";

/** Heading for the CV */
export default function Heading(): ReactElement {
  // note, the extra point in the clip-path is so that it animates properly
  const { src } = logo as { src: string };
  return (
    // eslint-disable-next-line spellcheck/spell-checker
    <div className="w-[calc(50vw+24rem)] max-w-[100vw] print:w-screen bg-violet-200 left-0 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] md:absolute md:aspect-[9/2] md:[clip-path:polygon(0_0,100%_0,100%_100%,0_0%)] print:absolute print:aspect-[9/2] print:[clip-path:polygon(0_0,100%_0,100%_100%)] transition-all">
      <div className="max-w-3xl w-full font-title p-6 flex flex-col items-end">
        <h1 className="text-5xl font-bold text-right">
          <img
            className="h-9 inline-block align-baseline mr-2"
            src={src}
            alt="logo"
          />
          Erik Brinkman
        </h1>
        <div className="hover:text-white hover:underline">
          {/* eslint-disable-next-line spellcheck/spell-checker */}
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
        <div className="hover:text-white hover:underline">
          <a href="tel:+13146326235" target="_blank" rel="noreferrer">
            314.632.6235
          </a>
        </div>
      </div>
    </div>
  );
}
