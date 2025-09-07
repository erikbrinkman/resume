import type { PropsWithChildren, ReactElement } from "react";

export default function ExperienceItem({
  children,
}: PropsWithChildren): ReactElement {
  return (
    <li>
      <div className="pl-1">{children}</div>
    </li>
  );
}
