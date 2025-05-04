import { ReactElement } from "react";

/** NOTE this float allows for diagonal wrapping */
export default function HeadingSpacer(): ReactElement {
  return (
    <div className="w-full float-right aspect-9/2 [shape-outside:polygon(0_0,100%_0,100%_100%)] hidden md:block print:block" />
  );
}
