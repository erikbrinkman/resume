import { PropsWithChildren, ReactElement } from "react";
import DotList from "./dot-list";

export default function School({
  name,
  years,
  degree,
  href,
  honors,
  gpa,
  children,
}: PropsWithChildren<{
  name: string;
  years: string;
  degree: string;
  href?: string;
  honors?: string;
  gpa?: number;
}>): ReactElement {
  const gpas: string[] = [];
  if (honors !== undefined) {
    gpas.push(honors);
  }
  if (gpa !== undefined) {
    gpas.push(gpa.toLocaleString(undefined, { minimumFractionDigits: 2 }));
  }
  const nameElem = href ? (
    <a href={href} target="_blank" rel="noreferrer" className="hover:underline">
      {name}
    </a>
  ) : (
    name
  );
  return (
    <div className="break-inside-avoid">
      <div className="flex justify-between w-full items-baseline">
        <div className="text-lg font-bold">{nameElem}</div>
        <div className="flex-shrink-0">{years}</div>
      </div>
      <div className="flex flex-col sm:flex-row print:flex-row justify-between w-full items-baseline">
        <div>{degree}</div>
        <DotList elems={gpas} />
      </div>
      {children}
    </div>
  );
}
