import type { PropsWithChildren, ReactElement } from "react";
import Header from "./header";

export default function Section({
  title,
  children,
}: PropsWithChildren<{ title: string }>): ReactElement {
  return (
    <div>
      <Header text={title} />
      <div className="space-y-2">{children}</div>
    </div>
  );
}
