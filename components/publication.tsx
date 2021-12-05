import { ReactElement } from "react";

export default function Publication({
  title,
  authors,
  conference,
  url,
}: {
  title: string;
  authors: string[];
  conference: string;
  url: string;
}): ReactElement {
  return (
    <div>
      <div className="text-lg hover:underline">
        <a target="_blank" rel="noreferrer" href={url}>
          {title}
        </a>
      </div>
      <div className="w-full flex justify-between">
        <div className="">{authors.join(", ")}</div>
        <div>{conference}</div>
      </div>
    </div>
  );
}
