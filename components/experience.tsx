import { PropsWithChildren, ReactElement } from "react";

export default function Experience({
  company,
  position,
  dates,
  children,
  href,
}: PropsWithChildren<{
  company: string;
  position: string;
  dates: string;
  href?: string;
}>): ReactElement {
  const nameElem = href ? (
    <a href={href} target="_blank" rel="noreferrer" className="hover:underline">
      {company}
    </a>
  ) : (
    company
  );

  return (
    <div className="break-inside-avoid">
      <div className="flex justify-between w-full items-baseline">
        <div className="space-x-2">
          <span className="text-lg font-bold">{nameElem}</span>
          <span>{position}</span>
        </div>
        <div className="shrink-0">{dates}</div>
      </div>
      <ul className="list-['▸'] ml-3 text-justify space-y-1">{children}</ul>
    </div>
  );
}
