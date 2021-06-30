import Head from "next/head";
import { ReactElement, HTMLAttributes, PropsWithChildren } from "react";
import logo from "../public/logo.svg";
import washu from "../public/washu-logo.svg";
import apl from "../public/apl-logo.svg";
import ll from "../public/lincoln-lab-logo.svg";
import umich from "../public/umich-logo.svg";
import upwork from "../public/upwork-logo.svg";
import yelp from "../public/yelp-logo.svg";
import fb from "../public/fb-logo.svg";
import {
  MdSchool,
  MdWhatshot,
  MdAccountCircle,
  MdComputer,
  MdLibraryBooks,
} from "react-icons/md";

// FIXME move these into components
function Header({
  text,
  icon,
  className = "",
  ...rest
}: {
  text: string;
  icon?: ReactElement;
} & HTMLAttributes<HTMLHeadingElement>): ReactElement {
  // FIXME maybe shift icons to the left into margin?
  return (
    <h2 className={`${className} flex text-3xl font-title space-x-2 font-bold`} {...rest}>
      {/*FIXME icon*/}
      <div>{text}</div>
    </h2>
  );
}

function Section({
  icon,
  title,
  children,
}: PropsWithChildren<{ icon: ReactElement; title: string }>): ReactElement {
  return (
    <div className="space-y-1">
      <Header icon={icon} text={title} />
      {children}
    </div>
  );
}

function Publication({
  title,
  authors,
  conference,
}: {
  title: string;
  authors: string[];
  conference: string;
}): ReactElement {
  // FIXME Links to publications
  return (
    <div>
      <div className="text-lg text-justify">{title}</div>
      <div className="w-full flex justify-between">
        <div className="">{authors.join(", ")}</div>
        <div>{conference}</div>
      </div>
    </div>
  );
}

function School({
  name,
  years,
  degree,
  gpa,
  children,
}: PropsWithChildren<{
  name: string;
  years: string;
  degree: string;
  gpa: number;
}>): ReactElement {
  const fgpa = gpa.toLocaleString(undefined, { minimumFractionDigits: 2 });
  return (
    <div>
      <div className="flex justify-between w-full items-baseline">
        <div className="text-lg">{name}</div>
        <div>{years}</div>
      </div>
        <div>{degree}</div>
        {/*FIXME <div>{`GPA: ${fgpa}`}</div>*/}
      {children}
    </div>
  );
}

// FIXME add appropriate hover styles so it looks good on web
// FIXME add yarn optimized images to inline svgs

function AffiliationLogo({
  img,
  alt,
  href,
}: {
  img: { src: string };
  alt: string;
  href: string;
}): ReactElement {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img className="h-full" src={img.src} alt={alt} />
    </a>
  );
}

// FIXME remove any and all indline styles
// FIXME make responsive, there is an xs breakpoint for phones
export default function Resume(): ReactElement {
  return (
    <div className="overflow-hidden w-full min-h-full overflow-y-clip">
      <div
        className="max-w-3xl mx-auto w-full print:max-w-none print:h-screen relative"
        style={{ maxWidth: "8.5in", height: "11in" }}
      >
        {/* FIXME figure out rotation angle, and then size as a result */}
        <div className="absolute bg-purple-200 origin-bottom-left transform -translate-y-full rotate-12 w-mask h-mask" />
        {/* FIXME print margins */}
        <div className="p-4 h-full" style={{ padding: "0.7cm 1cm" }}>
          <div className="relative z-10 h-full">
            <div className="absolute top-0 right-0 flex flex-col items-end font-title">
              {/* FIXME add logo links and adjust sizes */}
              <div className="flex space-x-4 justify-between items-baseline">
                <div>
                  <img className="h-9" src={logo.src} alt="logo" />
                </div>
                <h1 className="text-5xl font-bold">Erik Brinkman</h1>
              </div>
              <div>
                <a href="mailto:erik.brinkman@gmail.com">
                  erik.brinkman@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://erikbrinkman.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  erikbrinkman.github.io
                </a>
              </div>
              <div className="flex">
                {/* FIXME fix these fonts so they're "close" */}
                {/*
                <div>/ˈɛrɪk/</div>
                <div>he/him</div>
                  */}
              </div>
            </div>
            <div className="flex flex-col w-full h-full md:flex-row md:space-x-8 print:flex-row print:space-x-8">
              {/* FIXME change these to justify-between so that we fill all remaining space */}
              <div className="flex flex-col flex-1 flex-grow-phi justify-between space-y-8 mt-4 md:mb-40 print:mb-40">
                <Section icon={<MdAccountCircle />} title="Summary">
                  {/* this float allows "diagonal text" */}
                  <div className="float-right h-8 w-32" />
                  <p>
                    Blah blah need a summary here, mention large scale sparse
                    embeddings
                  </p>
                </Section>
                <Section icon={<MdComputer />} title="Current Position">
                  <div className="flex justify-between w-full items-baseline">
                    <div className="text-lg">Facebook</div>
                    <div>Research Scientist</div>
                    <div>2018&ndash;present</div>
                  </div>
                  <ul className="list-triangle ml-3">
                    <li>research</li>
                    <li>leading interns</li>
                    <li>project planning</li>
                  </ul>
                </Section>
                <Section
                  icon={<MdLibraryBooks />}
                  title="Selected Publications"
                >
                  <Publication
                    title="Empirical Mechanism Design for Optimizing Clearing Interval in Frequent Call Markets"
                    authors={["E. Brinkman", "M. P. Wellman"]}
                    conference="EC 2017"
                  />
                  <Publication
                    title="Signal Structure and Strategic Information Acquisition"
                    authors={["E. Brinkman", "M. P. Wellman", "S. E. Page"]}
                    conference="AAMAS 2014"
                  />
                </Section>
              </div>
              <div className="flex flex-col flex-1 justify-between space-y-8 mt-8 md:mt-32 print:mt-32 mb-16">
                <Section icon={<MdSchool />} title="Education">
                  <School
                    name="University of Michigan"
                    years="2012&ndash;2018"
                    degree="PhD in Computer Science and Engineering"
                    gpa={3.81}
                  >
                    <p>theseis: FIXME</p>
                    <p>Magna cum Laude</p>
                    <p>
                      Coursework: Machine Learning, Online Learning,
                      Reinforcement Learning, Social Networks
                    </p>
                  </School>
                  <School
                    name="Washington University"
                    years="2006&ndash;2010"
                    degree="BS in Systems Science"
                    gpa={3.88}
                  >
                    <p>Magna cum Laude</p>
                    <p>
                      Coursework: Algorithms for Nonlinear Optimization,
                      Nonlinear Dynamic Systems
                    </p>
                  </School>
                </Section>
                <Section icon={<MdWhatshot />} title="Skills">
                  <p>python, numpy, scipy, pytorch, sql</p>
                  <p>rust, hack, haskell, typescript, broomball</p>
                </Section>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 flex flex-col items-start font-title space-y-4">
              <Header text="Affiliations" />
              <div className="flex space-x-4 h-8">
                <AffiliationLogo
                  img={washu}
                  alt="Wash U Logo"
                  href="https://wustl.ed"
                />
                <AffiliationLogo
                  img={apl}
                  alt="APL Logo"
                  href="https://jhuapl.edu"
                />
                <AffiliationLogo
                  img={ll}
                  alt="Lincoln Lab Logo"
                  href="https://ll.mit.edu"
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
                <AffiliationLogo
                  img={yelp}
                  alt="Yelp Logo"
                  href="https://yelp.com"
                />
                <AffiliationLogo
                  img={fb}
                  alt="Facebook Logo"
                  href="https://facebook.com"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-purple-200 bottom-0 right-0 origin-top transform translate-x-2/4 translate-y-full rotate-12 w-mask h-mask" />
      </div>
    </div>
  );
}
