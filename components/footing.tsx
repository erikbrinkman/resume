import { SiGithub, SiGooglescholar, SiLinkedin } from "react-icons/si";
import ContactIcon from "./contact-icon";
import Header from "./header";

/** Footing for the CV */
export default function Footing({
  upward = false,
}: {
  /** render the element upward instead of downward: useful for a single page */
  upward?: boolean;
}): React.ReactElement {
  const ups = upward
    ? "md:absolute print:absolute md:bottom-0 print:bottom-0 print:aspect-9/2 print:[clip-path:polygon(0_0,0_100%,100%_100%)]"
    : "";
  /* eslint-disable spellcheck/spell-checker */
  return (
    <div
      className={`relative ${ups} bottom-0 md:left-[calc(24rem-50vw)] break-inside-avoid w-[calc(50vw+24rem)] print:w-screen max-w-[100vw] md:aspect-9/2 [clip-path:polygon(0_0,0_100%,100%_100%,100%_0)] md:[clip-path:polygon(0_0,0_100%,100%_100%,100%_100%)] bg-violet-200 transition-all`}
    >
      <div className="p-6 max-w-3xl h-full ml-auto flex flex-col justify-end gap-1">
        <Header text="Find Me" />
        <div className="flex space-x-4">
          <ContactIcon
            img={<SiGithub />}
            footer="@erikbrinkman"
            href="https://github.com/erikbrinkman"
          />
          <ContactIcon
            img={<SiGooglescholar />}
            footer="4CerxXxb7KAC"
            href="https://scholar.google.com/citations?user=4CerxXxb7KAC"
          />
          <ContactIcon
            img={<SiLinkedin />}
            footer="@erikbrinkman"
            href="https://www.linkedin.com/in/erikbrinkman/"
          />
        </div>
      </div>
    </div>
  );
  /* eslint-enable spellcheck/spell-checker */
}
