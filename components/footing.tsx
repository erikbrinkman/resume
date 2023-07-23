import { ReactElement } from "react";
import AffiliationLogo from "./affiliation-logo";
import Header from "./header";
import { apl, ll, meta, umich, upwork, washu, yelp } from "./icons";

/** Footing for the CV */
export default function Footing({
  upward = false,
}: {
  /** render the element upward instead of downward: useful for a single page */
  upward?: boolean;
}): ReactElement {
  const ups = upward
    ? "md:absolute print:absolute md:bottom-0 print:bottom-0 print:aspect-[9/2] print:[clip-path:polygon(0_0,0_100%,100%_100%)]"
    : "";
  return (
    <div
      className={`relative ${ups} bottom-0 md:left-[calc(24rem-50vw)] break-inside-avoid w-[calc(50vw+24rem)] print:w-screen max-w-[100vw] md:aspect-[9/2] [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)] md:[clip-path:polygon(0_0,0_100%,100%_100%,100%_100%)] bg-violet-200 transition-all`}
    >
      <div className="p-6 max-w-3xl h-full ml-auto flex flex-col justify-end">
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
