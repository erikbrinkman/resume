export default function ContactIcon({
  img,
  footer,
  href,
}: {
  img: React.ReactElement;
  footer: string;
  href: string;
}): React.ReactElement {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="h-full hover:invert"
    >
      <div className="flex flex-col items-center gap-1">
        <div className="text-3xl">{img}</div>
        <div className="text-[.3rem] font-bold">{footer}</div>
      </div>
    </a>
  );
}
