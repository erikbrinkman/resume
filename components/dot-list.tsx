import { ReactElement } from "react";

export default function DotList({ elems }: { elems: string[] }): ReactElement {
  const str = elems.join(" · ");
  return <span>{str}</span>;
}
