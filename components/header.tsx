import { HTMLAttributes, ReactElement } from "react";

export default function Header({
  text,
  className = "",
  ...rest
}: {
  text: string;
} & HTMLAttributes<HTMLHeadingElement>): ReactElement {
  return (
    <h2
      className={`${className} flex text-3xl font-title space-x-2 font-bold`}
      {...rest}
    >
      <div>{text}</div>
    </h2>
  );
}
