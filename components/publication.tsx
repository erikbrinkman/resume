import { ReactElement } from "react";

export default function Publication({
  title,
  authors,
  conference,
  url,
  maxAuthors = Infinity,
}: {
  title: string;
  authors: string[];
  conference?: string;
  url: string;
  maxAuthors?: number;
}): ReactElement {
  const byline =
    authors.length > maxAuthors ? `${authors[0]} et al.` : authors.join(", ");
  return (
    <div>
      <div className="text-lg hover:underline">
        <a target="_blank" rel="noreferrer" href={url}>
          {title}
        </a>
      </div>
      <div className="w-full flex justify-between">
        <div className="">{byline}</div>
        <div className="shrink-0">{conference}</div>
      </div>
    </div>
  );
}
