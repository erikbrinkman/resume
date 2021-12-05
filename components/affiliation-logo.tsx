import { ReactElement } from "react";

export default function AffiliationLogo({
  img,
  alt,
  href,
}: {
  img: { src: string };
  alt: string;
  href: string;
}): ReactElement {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img className="h-full hover:invert" src={img.src} alt={alt} />
    </a>
  );
}
