import { ReactElement } from "react";

/** NOTE this float allows for diagonal wrapping */
export default function HeadingSpacer(): ReactElement {
  return (
    <div className="float-right w-full md:pt-[21.25565616700221%] print:pt-[21.25565616700221%] shape-outside-tri-ur" />
  );
}
