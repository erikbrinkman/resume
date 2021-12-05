import { ReactElement } from "react";
import AffiliationLogo from "./affiliation-logo";
import Header from "./header";
import { apl, ll, meta, umich, upwork, washu, yelp } from "./icons";

/** Footing for the CV */
export default function Footing({
  upward = false,
  mobilePrint = false,
}: {
  /** render the element upward instead of downward: useful for a single page */
  upward?: boolean;
  /** use mobile formatting when printing: useful for multi page */
  mobilePrint?: boolean;
}): ReactElement {
  const ups = upward
    ? "md:absolute print:absolute md:bottom-0 print:bottom-0"
    : "";
  const triClass = mobilePrint ? "" : "print:bg-violet-200";
  const rectClass = mobilePrint ? "" : "print:bg-transparent";
  return (
    <div
      className={`relative ${ups} w-full bottom-0 md:pt-8 print:pt-8 break-inside-avoid`}
    >
      {/* NOTE this is the slanted purple background when tilted */}
      <div
        className={`absolute w-[200vmax] h-[200vmax] right-0 bottom-0 origin-top-right translate-y-full rotate-12 md:bg-violet-200 ${triClass}`}
      />
      <div
        className={`p-6 relative bg-violet-200 md:bg-transparent ${rectClass}`}
      >
        <Header text="Affiliations" />
        <div className="flex space-x-4 h-8">
          <AffiliationLogo
            img={washu}
            alt="Wash U Logo"
            href="https://wustl.edu"
          />
          <AffiliationLogo img={apl} alt="APL Logo" href="https://jhuapl.edu" />
          <AffiliationLogo
            img={ll}
            alt="Lincoln Lab Logo"
            href="https://www.ll.mit.edu"
          />
          <AffiliationLogo
            img={umich}
            alt="University of Michigan Logo"
            href="https://umich.edu"
          />
          <AffiliationLogo
            img={upwork}
            alt="Upwork Logo"
            href="https://upwork.com"
          />
          <AffiliationLogo img={yelp} alt="Yelp Logo" href="https://yelp.com" />
          <AffiliationLogo img={meta} alt="Meta Logo" href="https://meta.com" />
        </div>
      </div>
    </div>
  );
}
